import React from "react";
import calpic from "./calpic.png";
import chatpic from "./chatpic.png";
import vaultslogo from "./vaultslogo.png";
import frothlogo from "./frothlogo.png";
import wavepointlogo from "./wavepointlogo.png";
import thumbprintlogo from "./thumbprintlogo.png";

class Products extends React.Component {
  render() {
    return (
      <div
        style={{
          borderTop: "1px solid black",
          width: "100%",
          position: "absolute"
        }}
      >
        <a
          href="https://micro-theory.com"
          style={{
            fontSize: "30px",
            display: "none",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "76px",
            backgroundColor: "white",
            color: "black"
          }}
        >
          Micro-Theory.com
        </a>
        <a
          href="https://pineapple-mint.com"
          style={{
            fontSize: "30px",
            display: "none",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "76px",
            backgroundColor: "rgb(218, 198, 90)",
            color: "rgb(200, 100, 100)"
          }}
        >
          Pineapple-Mint.com
        </a>
        <div
          style={{
            display: "none",
            marginTop: "20px",
            borderTop: "1px solid black",
            width: "100%",
            paddingTop: "20px"
          }}
        >
          <img
            src="https://www.dl.dropboxusercontent.com/s/oi43wpcc0h9phcz/saverAcorn%20%281%29.png?dl=0"
            style={{
              display: "flex",
              position: "relative",
              width: "200px",
              height: "auto",
              left: "20px",
              marginBottom: "20px"
            }}
            alt="error"
          />
          <h1>
            <span>Saver Party</span>
            <span>, </span>
            <span>Fair Haven, NJ — </span>
            <span>Founder</span>
          </h1>
          <h3>
            <span>Jul 2020 - PRESENT</span>
          </h3>
          <div
            style={{
              marginTop: "20px",
              border: "1px solid black",
              maxWidth: "600px",
              padding: "20px"
            }}
          >
            <span>Political party startup & consumer advocacy</span>
            <br />
            <br />
            <span>
              <a href="https://saverparty.xyz">saverparty.xyz</a>
            </span>
          </div>
        </div>
        <div
          style={{
            display: "none",
            marginTop: "20px",
            borderTop: "1px solid black",
            width: "100%",
            paddingTop: "20px"
          }}
        >
          <img
            src="https://www.dl.dropboxusercontent.com/s/u1v0jb41vxv9ffo/Scopebook%20logo%20%281%29.png?dl=0"
            style={{
              display: "flex",
              position: "relative",
              width: "200px",
              height: "auto",
              left: "20px",
              marginBottom: "20px"
            }}
            alt="error"
          />
          <h1>
            <span>Scopebook</span>
            <span>, </span>
            <span>Fair Haven, NJ — </span>
            <span>Product</span>
          </h1>
          <h3>
            <span>Jun 2020 - PRESENT</span>
          </h3>
          <div
            style={{
              marginTop: "20px",
              border: "1px solid black",
              maxWidth: "600px",
              padding: "20px"
            }}
          >
            <span>Customer Relationship Management</span>
            <br />
            <br />
            <span>
              <a href="https://scopes.cc">scopes.cc</a>
            </span>
          </div>
        </div>
        <div
          style={{
            display: "none",
            marginTop: "20px",
            borderTop: "1px solid black",
            width: "100%",
            paddingTop: "20px"
          }}
        >
          <img
            src={vaultslogo}
            style={{
              display: "flex",
              position: "relative",
              width: "200px",
              height: "auto",
              left: "20px",
              marginBottom: "20px"
            }}
            alt="error"
          />
          <h1>
            <span>Vaults.biz</span>
            <span>, </span>
            <span>Fair Haven, NJ — </span>
            <span>Product</span>
          </h1>
          <h3>
            <span>Apr 2020 - PRESENT</span>
          </h3>
          <div
            style={{
              marginTop: "20px",
              border: "1px solid black",
              maxWidth: "600px",
              padding: "20px"
            }}
          >
            <span>Debt-free banking and partnership-stewardship</span>
            <br />
            <br />
            <span>
              <a href="https://vaults.biz">vaults.biz</a>
            </span>
          </div>
        </div>
        <div
          style={{
            display: "none",
            marginTop: "20px",
            borderTop: "1px solid black",
            width: "100%",
            paddingTop: "20px"
          }}
        >
          <img
            src={frothlogo}
            style={{
              display: "flex",
              position: "relative",
              width: "200px",
              height: "auto",
              left: "20px",
              marginBottom: "20px"
            }}
            alt="error"
          />
          <h1>
            <span>Froth Analysis</span>
            <span>, </span>
            <span>Fair Haven, NJ — </span>
            <span>Webmaster</span>
          </h1>
          <h3>
            <span>Apr 2018 - PRESENT</span>
          </h3>
          <div
            style={{
              marginTop: "20px",
              border: "1px solid black",
              maxWidth: "600px",
              padding: "20px"
            }}
          >
            <span>
              Chart time-series econometric and financial data for everyone
            </span>
            <br />
            <br />
            <span>
              <a href="https://froth.app">froth.app</a> - economy
            </span>
            <br />
            <span>
              <a href="https://book.com.co">book.com.co</a> - securities
            </span>
          </div>
        </div>
        <div
          style={{
            display: "none",
            marginTop: "20px",
            borderTop: "1px solid black",
            width: "100%",
            paddingTop: "20px"
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              width: "420px",
              maxWidth: "100%",
              height: "220px",
              overflowX: "auto",
              overflowY: "hidden"
            }}
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                width: "400px",
                height: "200px"
              }}
            >
              <img
                src={thumbprintlogo}
                style={{
                  display: "flex",
                  position: "relative",
                  width: "200px",
                  height: "auto",
                  left: "20px"
                }}
                alt="error"
              />
              <img
                src={wavepointlogo}
                style={{
                  display: "flex",
                  position: "relative",
                  width: "200px",
                  height: "auto",
                  left: "20px"
                }}
                alt="error"
              />
            </div>
          </div>
          <h1>
            <span>Thumbprint.us - Social Calendar</span>
            <span>, </span>
            <span>Fair Haven, NJ — </span>
            <span>CEO</span>
          </h1>
          <h3>
            <span>Nov</span>
            <span>&nbsp;2012 - PRESENT</span>
          </h3>
          <div
            style={{
              marginTop: "20px",
              border: "1px solid black",
              maxWidth: "600px",
              padding: "20px"
            }}
          >
            <span>
              Manage teams of designers, developers & video producers. Interview
              governments, universities & constituents during UX discovery +
              InVision design-testing, writing content, deliver speeches and
              press releases, and directly manage internal ops. Develop web-app
              with ReactJS, Firebase, etc.
            </span>
            <br />
            <br />
            <span>
              released-promos:{" "}
              <a href="https://vimeo.com/nickcarducci">
                vimeo.com/nickcarducci
              </a>
            </span>
            <br />
            <span>
              business-splash: <a href="https://thumbprint.us">thumbprint.us</a>
            </span>
            <br />
            <span>
              stale public-beta1:{" "}
              <a href="https://thumbprint.app">thumbprint.app</a>
            </span>
            <br />
            <span>
              alpha: <a href="https://wavv.art">wavv.art</a>
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            borderTop: "1px solid black",
            width: "100%",
            paddingTop: "20px",
            flexDirection: "column"
          }}
        >
          <div className="invisionmobile">
            mobile users please open: 2017 InVision
            <br />
            <a href="https://projects.invisionapp.com/share/RSBG9X06H#/screens/230757524_TUTORIAL_1">
              https://projects.invisionapp.com/share/RSBG9X06H
            </a>
          </div>
          <br />
          <div className="invision">
            <iframe
              title="mockup"
              src="https://projects.invisionapp.com/share/RSBG9X06H#/screens/230757524_TUTORIAL_1"
              style={{
                display: "flex",
                position: "absolute",
                left: "45%",
                border: "0px #ffffff none",
                transform: "scale(0.7) translate(-69%,-25%)"
              }}
              name="myiFrame"
              scrolling="no"
              frameBorder="1"
              marginHeight="0px"
              marginWidth="0px"
              height="900px"
              width="600px"
              allowFullScreen
            />
          </div>
          <img
            style={{ width: "100%", maxWidth: "500px" }}
            src={calpic}
            alt="err"
          />
          <img
            style={{ width: "100%", maxWidth: "500px", marginTop: "10px" }}
            src={chatpic}
            alt="err"
          />
          {/*<iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/413281034"
          width="90%"
          height="700"
          frameborder="0"
          allowfullscreen
        />*/}
        </div>
        {/*<div
          style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "50px",
            padding: "0px 10px",
            zIndex: "999",
            bottom: "10px",
            left: "10px",
            cursor: "pointer",
            border: "1px blue solid"
          }}
        >
          Products
        </div>*/}
      </div>
    );
  }
}
export default Products;

