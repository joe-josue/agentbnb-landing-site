import { ImageResponse } from "next/og";

export const alt = "AgentBNB AI hospitality operations stack";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 48,
          background:
            "linear-gradient(135deg, #f8f2e8 0%, #fbf7ee 46%, #eadfce 100%)",
          color: "#181b16",
          fontFamily:
            'Geist, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(29,35,28,0.16)",
            borderRadius: 18,
            padding: 42,
            background: "rgba(255,250,241,0.72)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <img
                alt=""
                height={68}
                src="https://www.agent-bnb.com/brand/agentbnb-icon.png"
                width={68}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <div style={{ fontSize: 30, fontWeight: 800 }}>AgentBNB</div>
                <div
                  style={{
                    color: "#9a4e38",
                    fontSize: 15,
                    fontWeight: 800,
                    textTransform: "uppercase",
                  }}
                >
                  AI hospitality operations stack
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid rgba(154,78,56,0.22)",
                borderRadius: 999,
                color: "#596b4d",
                fontSize: 18,
                fontWeight: 800,
                padding: "10px 18px",
              }}
            >
              agent-bnb.com
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <div
              style={{
                maxWidth: 910,
                fontSize: 78,
                fontWeight: 850,
                lineHeight: 0.95,
              }}
            >
              Operate Airbnb-style properties with an AI-Agent
            </div>
            <div
              style={{
                maxWidth: 790,
                color: "#3f463b",
                fontSize: 28,
                fontWeight: 560,
                lineHeight: 1.32,
              }}
            >
              White-label operations for short-stay properties: guest triage,
              direct booking, owner approval, records, and repeatable operating
              truth.
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {["AI agent", "Property SoR", "Direct booking", "$50/mo base ops"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid rgba(29,35,28,0.13)",
                    borderRadius: 10,
                    background: "rgba(255,250,241,0.7)",
                    color: "#303b2c",
                    fontSize: 20,
                    fontWeight: 760,
                    padding: "12px 16px",
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
