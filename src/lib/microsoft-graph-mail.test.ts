import { afterEach, describe, expect, it, vi } from "vitest";
import { sendGraphMail } from "./microsoft-graph-mail";

describe("sendGraphMail", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("throws when Microsoft Graph config is incomplete", async () => {
    await expect(
      sendGraphMail(
        {
          to: "contact@example.com",
          replyTo: "sender@example.com",
          subject: "Inquiry",
          html: "<p>Hello</p>",
        },
        {},
      ),
    ).rejects.toThrow("Microsoft Graph mail is not configured.");
  });

  it("requests a token and sends mail through the configured mailbox", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ access_token: "token-123" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      )
      .mockResolvedValueOnce(new Response(null, { status: 202 }));

    await sendGraphMail(
      {
        to: "Contact@DigitalEnergyHoldings.Com",
        replyTo: "sender@example.com",
        subject: "Digital Energy Holdings inquiry",
        html: "<p>Message</p>",
      },
      {
        tenantId: "tenant",
        clientId: "client",
        clientSecret: "secret",
        fromEmail: "Contact@DigitalEnergyHoldings.Com",
      },
    );

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[0]?.[0]).toBe(
      "https://login.microsoftonline.com/tenant/oauth2/v2.0/token",
    );
    expect(fetchMock.mock.calls[1]?.[0]).toBe(
      "https://graph.microsoft.com/v1.0/users/Contact%40DigitalEnergyHoldings.Com/sendMail",
    );
  });
});
