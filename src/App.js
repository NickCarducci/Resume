import React from "react";
import "./styles.css";
import VideoCollab from "./VideoCollab";
import Products from "./Products";
import { SocialIcon } from "react-social-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabChosen: "product", width: 0 };
    this.width = React.createRef();
    this.top = React.createRef();
    this.center = React.createRef();
    this.right = React.createRef();
  }
  componentDidUpdate = (prevProps) => {
    const { width } = this.props;

    if (width !== prevProps.width)
      if (
        width < 600 &&
        (!this.state.widthMT600 ||
          this.state.openVids ||
          this.state.openProducts)
      ) {
        this.setState({
          widthMT600: true,
          openVids: false,
          openProducts: false
        });
        this.setState({ width });
      } else if (this.state.widthMT600) {
        this.setState({ widthMT600: false });
      }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.onscroll, true);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.onscroll);
  };
  onscroll = () => {
    clearTimeout(this.timeout2);
    this.timeout2 = setTimeout(() => {
      if (this.state.openVids) {
        var width = this.top.current && window.scrollY;
        if (width > 400 && this.state.openVids) {
          this.setState({ showUpper: true });
        } else if (this.state.showUpper) {
          this.setState({ showUpper: false });
        }
      }
    }, 200);
  };
  render() {
    const { width } = this.props;
    return (
      <div
        className="App"
        style={
          this.state.widthMT600
            ? {
                position: "fixed",
                display: "flex",
                overflow: "hidden",
                width: "100%",
                height: "100%"
              }
            : { marginBottom: "0px" }
        }
      >
        <div
          className="topleft"
          style={{
            overflowY: this.state.tabChosen !== "product" ? "" : "hidden"
          }}
        >
          <div ref={this.top} className="topleftleft">
            <span
              style={{
                wordBreak: "break-all",
                fontSize: "40px",
                marginTop: "30px"
              }}
            >
              Nicholas Carducci
            </span>
            <div
              style={{
                marginTop: "20px",
                border: "1px solid black",
                maxWidth: "600px",
                padding: "20px"
              }}
            >
              <span>
                Product Manager, Rapid Web-Developer,
                <br />
                Interaction-Designer, Casting & Copy,
              </span>
              <br />
              <span>26 Battin Road, </span>
              <span>Fair Haven, NJ 07704</span>
              <br />
              <span>(732) 233-1085</span>
              <br />
              <span>
                <SocialIcon
                  style={{
                    height: "40px",
                    width: "40px"
                  }}
                  url="mailto:govtech@thumbprint.us"
                />{" "}
                <a href="mailto:govtech@thumbprint.us">govtech@thumbprint.us</a>
              </span>
              <br />
              <span>
                undergraduate papers:{" "}
                <a href="https://johnshopkins.academia.edu/NickCarducci">
                  johnshopkins.academia.edu/NickCarducci
                </a>
              </span>
              <br />
              <span>
                research profile:{" "}
                <a href="https://www.researchgate.net/profile/Nicholas_Carducci">
                  researchgate.net/profile/Nicholas_Carducci
                </a>
              </span>
              {/*<br />
              <span>
                light-essays:{" "}
                <a href="https://medium.com/@vianickcarducci">
                  medium.com/@vianickcarducci
                </a>
              </span>*/}
              <br />
              <span>
                video-collaboration:{" "}
                <a href="https://vimeo.com/nickcarducci">
                  vimeo.com/nickcarducci
                </a>
              </span>
              <br />
              <div>
                <SocialIcon
                  style={{
                    height: "40px",
                    width: "40px"
                  }}
                  url="https://twitter.com/nickcarducci"
                />
                <SocialIcon
                  style={{
                    height: "40px",
                    width: "40px"
                  }}
                  url="https://linkedin.com/in/nickcarducci"
                />
                <SocialIcon
                  style={{
                    height: "40px",
                    width: "40px"
                  }}
                  url="https://facebook.com/nick.carducci"
                />
                <SocialIcon
                  style={{
                    height: "40px",
                    width: "40px"
                  }}
                  url="https://quora.com/profile/Nick-Carducci"
                />
                <SocialIcon
                  style={{
                    height: "40px",
                    width: "40px"
                  }}
                  url="https://github.com/nickcarducci"
                />
              </div>
            </div>
            <br />
            <div
              style={{
                marginTop: "20px",
                borderTop: "1px solid black",
                width: "80%",
                padding: "20px"
              }}
            >
              <h1>Experienced Open-Source Chief Executive Officer</h1>
              <div
                style={{
                  marginTop: "20px",
                  border: "1px solid black",
                  maxWidth: "600px",
                  padding: "20px"
                }}
              >
                since 2012 working in the telecommunications industry. Skilled
                in SaaS Productivity Software, Educational Technology, Public
                Speaking, ReactJS, Google Cloud Platform, and UX/UI Design.
                Bachelor's Degree from The Johns Hopkins University in 2015 in
                Political Science with a minor in Economics.
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                borderTop: "1px solid black",
                width: "80%",
                paddingTop: "20px"
              }}
            >
              <h1>Utilize my experience</h1>
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  marginTop: "20px",
                  border: ".5px dotted silver",
                  maxWidth: "600px",
                  padding: "20px",
                  paddingLeft: "12px",
                  justifyContent: "flex-start",
                  textAlign: "left",
                  borderLeft: "1px dotted silver"
                }}
              >
                <div
                  style={{
                    borderLeft: "1px solid black",
                    paddingLeft: "15px"
                  }}
                />
                I worked with Nick on a startup project in college. One of the
                founders, who Nick brought on through his own initiative, went
                on to found a Y-Combinator backed Startup. The other, myself,
                works for a leading Series-C backed Healthcare Startup and
                operates an independent Social Media & Web Design Agency based
                in Silicon Beach. This being said, Nick shows great leadership
                acumen and the ability to naturally gravitate and collaborate
                with top talent. Nick has extensive knowledge of financial
                markets, political systems, and width one of the most talented
                graphic and UX designers I have ever worked with, whose
                abilities rival that of seasoned professionals. I would highly
                recommend him for any roles in finance, politics, UX Design, or
                graphic design.
                <br />
                <br />
                Nick Simonelli
                <br />
                Health Marketing at mPulse Mobile
              </div>
              <div
                style={{
                  marginTop: "20px",
                  border: "1px solid black",
                  maxWidth: "600px",
                  padding: "20px"
                }}
              >
                of building a SaaS product for a full mobile-OS to help
                revolutionize a new market, or just help a client operate their
                business logic into front-end code, or manage JSON objects or
                relational databases, or delve into AI or unstructured data.
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                borderTop: "1px solid black",
                width: "80%",
                paddingTop: "20px"
              }}
            >
              <h1>Data accountability</h1>
              <div
                style={{
                  marginTop: "20px",
                  border: "1px solid black",
                  maxWidth: "600px",
                  padding: "20px"
                }}
              >
                width my passion. I am an economic-regression geek, blockchain
                enthusiast for voting-tallies, <br />
                &data visualization practitioner
              </div>
              <br />
              <br />
              <h1>
                <span />
              </h1>
              <h1>
                <span className="bluetitle">EXPERIENCE</span>
              </h1>
              <br />
            </div>
            <div
              style={{
                marginTop: "20px",
                borderTop: "1px solid black",
                width: "80%",
                paddingTop: "20px"
              }}
            >
              <h1>
                <span>K. M. Hughes Fine Homes, </span>
                <span>Fair Haven, NJ — </span>
                <span>Executive Assistant</span>
              </h1>
              <span>
                <a href="https://kmhughes.com">kmhughes.com</a>
              </span>
              <h3>
                <span>May 2006 - &nbsp;Sep 2012</span>
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
                  Occasional foreman &amp; vendor relationship manager. Mainly
                  organized receipts &amp; estimates in the office.
                </span>
              </div>
              <br />
              <br />
              <h1>
                <span className="bluetitle">EDUCATION</span>
              </h1>
            </div>
            <div
              style={{
                marginTop: "20px",
                borderTop: "1px solid black",
                width: "80%",
                paddingTop: "20px"
              }}
            >
              <h1>
                <span>The Johns Hopkins University</span>
                <span>, </span>
                <span>Baltimore, MD — </span>
                <span>B.A. Political Science</span>
              </h1>
              <h3>
                <span>Sep 2010 - Dec 2015</span>
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
                  Research quantitative and qualitative socioeconomic conditions
                  concerning East Asia and the United States using a
                  cross-sectional and a time-series analysis
                </span>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                borderTop: "1px solid black",
                width: "80%",
                paddingTop: "20px"
              }}
            >
              <h1>
                <span>Monmouth University</span>
                <span>, </span>
                <span>West Long Branch, NJ — </span>
                <span>Credits</span>
              </h1>
              <h3>
                <span>Sep 2013 - May 2015</span>
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
                  Incubate U.S. Thumbprint 501(c)3 into a viable product, learn
                  rudimentary java, research the Near East and the implications
                  of morals/ethics in international law
                </span>
              </div>
              <br />
              <br />
              <h1>
                <span className="bluetitle">ATHLETIC</span>
              </h1>
            </div>
            <div
              style={{
                marginTop: "20px",
                borderTop: "1px solid black",
                width: "80%",
                paddingTop: "20px"
              }}
            >
              <h1>
                <span>Johns Hopkins University Wrestling</span>
                <span>&nbsp;</span>
                <span>— </span>
                <span>Athlete</span>
              </h1>
              <h3>
                <span>Aug 2010 - Mar 2011 + Aug 2012 - Mar 2013</span>
              </h3>
              <div
                style={{
                  marginTop: "20px",
                  border: "1px solid black",
                  maxWidth: "600px",
                  padding: "20px",
                  marginBottom: "40px"
                }}
              >
                <span>
                  Commit over 18 hours a week to compete in the NCAA Division
                  III Centennial Conference
                </span>
              </div>
            </div>
          </div>
          <div
            className={"skills"}
            style={{
              width:
                this.state.tabChosen !== "skill"
                  ? "25vw"
                  : width < 1000
                  ? "50vw"
                  : "60vw"
            }}
          >
            <div
              ref={this.right}
              style={{
                display: "flex",
                position: "absolute",
                flexDirection: "column",
                top: "0px",
                height: "min-content",
                width: "100%",
                marginBottom: "100px",
                zIndex: "9998",
                backgroundColor: "white"
              }}
            >
              <h1>
                <span>SKILLS</span>
              </h1>
              <div
                style={{
                  marginTop: "20px",
                  border: "1px solid black",
                  padding: "20px"
                }}
              >
                <ul>
                  <li>
                    <span>Self-taught</span>
                  </li>
                  <li>
                    <span>ReactJS + CSS + JSX</span>
                  </li>
                  <li>
                    <span>D3-Shape</span>
                  </li>
                  <li>
                    <span>Google Cloud Platform</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>PouchDB</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>UX/UI Design</span>
                  </li>
                  <li>
                    <span>Product Research</span>
                  </li>
                  <li>
                    <span>Mapbox</span>
                  </li>
                </ul>
              </div>
              <br />
              <div
                style={{
                  marginTop: "20px",
                  borderTop: "1px solid black",
                  width: "100%",
                  paddingTop: "20px",
                  wordBreak: "break-word"
                }}
              >
                <h1>
                  <span>ACHIEVEMENTS</span>
                </h1>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  border: "1px solid black",
                  maxWidth: "600px",
                  padding: "20px"
                }}
              >
                <span>2015 Business Pitch finalist</span>
                <span>&nbsp;Johns Hopkins Business Plan competition</span>

                <br />
                <br />
                <span>FIJI PUSH </span>
                <span>
                  Raise $9,000 by helping to plan two fundraising events with
                  the United Services Organization (USO) to support U.S. service
                  members
                </span>
                <br />
                <br />
                <span>2010 Dodgeball Tradition</span>
                <span>&nbsp;</span>
                <span>
                  Raise $2,500 by planning an annual dodgeball tournament event
                  in high school to raise funds for a child in need of a kidney
                  transplant, ran for at least 6 years consecutively afterwards
                </span>
              </div>

              <br />
              <div
                style={{
                  marginTop: "20px",
                  borderTop: "1px solid black",
                  width: "100%",
                  paddingTop: "20px",
                  wordBreak: "break-word"
                }}
              >
                <h1>
                  <span>LANGUAGES</span>
                </h1>
                <div
                  style={{
                    marginTop: "20px",
                    border: "1px solid black",
                    maxWidth: "600px",
                    padding: "20px",
                    marginBottom: "40px"
                  }}
                >
                  <span>Fluent English; Elementary Mandirin &amp; Spanish</span>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div
          style={
            this.state.widthMT600
              ? {
                  display: "none"
                }
              : {
                  display: "flex",
                  position: "relative",
                  width: "99%",
                  height: "100%",
                  top: "0px",
                  flexDirection: "column",
                  backgroundColor: "white"
                }
          }
        >
          <div
            onClick={
              this.state.openVids
                ? () => this.setState({ openVids: false })
                : () => {
                    this.setState({ openVids: true });
                    this.top.current.scrollIntoView({
                      behavior: "smooth",
                      alignTop: true
                    });
                    /*this.center.current.scrollIntoView({
                      behavior: "smooth",
                      alignTop: true
                    });
                    this.right.current.scrollIntoView({
                      behavior: "smooth",
                      alignTop: true
                    });*/
                  }
            }
            className={
              this.state.widthMT600
                ? "novideobutton"
                : this.state.openVids
                ? "openVidBtnOut"
                : "openVidBtnIn"
            }
          >
            <iframe
              title="vid2"
              src="https://player.vimeo.com/video/137201995?background=1&autoplay=1&muted=1"
              marginHeight="0"
              marginWidth="0"
              frameBorder="0"
              allowFullScreen
              style={{
                ...(this.state.widthMT600 ||
                width < 600 ||
                this.state.tabChosen !== "product"
                  ? { display: "none" }
                  : {
                      pointerEvents: "none"
                    }),
                width: 640,
                height: this.props.height < 600 ? 150 : 360
              }}
            />
            <div
              style={{
                display: "flex",
                position: "absolute",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "50px",
                padding: "0px 10px",
                zIndex: "9999",
                bottom: "10px",
                left: "10px",
                cursor: "pointer"
              }}
            >
              Video Collaborations {">"}
            </div>
          </div>
          <VideoCollab
            closevideos={() => this.setState({ openVids: false })}
            openVids={this.state.openVids}
            openProducts={this.state.openProducts}
            opentheproducts={() => this.setState({ openProducts: true })}
            closeproducts={() => this.setState({ openProducts: false })}
          />
        </div>
        <div
          onClick={() =>
            this.top.current.scrollIntoView({
              behavior: "smooth",
              alignTop: true
            })
          }
          style={
            this.state.showUpper
              ? {
                  display: "flex",
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  width: "56px",
                  height: "56px",
                  opacity: "1",
                  backgroundColor: "blue",
                  transition: "1s ease-in",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white"
                }
              : {
                  display: "flex",
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  width: "56px",
                  height: "56px",
                  opacity: "0",
                  backgroundColor: "blue",
                  transition: "1s ease-in",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white"
                }
          }
        >
          ^
        </div>
        {!this.state.openVids && (
          <div
            ref={this.center}
            className={
              this.state.tabChosen !== "product"
                ? "openProdsOut"
                : "openProdsIn"
            }
          >
            <Products />
          </div>
        )}
        <div className="landscaper">
          <div
            onClick={() => this.setState({ tabChosen: "product" })}
            style={
              this.state.tabChosen === "product"
                ? {
                    display: "flex",
                    height: "min-content",
                    color: "white",
                    backgroundColor: "blue"
                  }
                : {
                    display: "flex",
                    height: "min-content"
                  }
            }
          >
            products
          </div>
          <div
            onClick={() => this.setState({ tabChosen: "skill" })}
            style={
              this.state.tabChosen === "skill"
                ? {
                    display: "flex",
                    height: "min-content",
                    color: "white",
                    backgroundColor: "blue"
                  }
                : {
                    display: "flex",
                    height: "min-content"
                  }
            }
          >
            skills
          </div>
          <div
            onClick={() => {
              this.setState({ tabChosen: "video" });
              var answer = window.confirm(
                "navigate to https://vimeo.com/nickcarducci ?"
              );
              if (answer) {
                window.location.href = "https://vimeo.com/nickcarducci";
              }
            }}
            style={
              this.state.tabChosen === "video"
                ? {
                    display: "flex",
                    height: "min-content",
                    color: "white",
                    backgroundColor: "blue"
                  }
                : {
                    display: "flex",
                    height: "min-content"
                  }
            }
          >
            video
          </div>
        </div>
      </div>
    );
  }
}
