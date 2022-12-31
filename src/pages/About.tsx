
const contentStyle: React.CSSProperties = {
  backgroundColor: "rgba(182,239,73,.2)",
  paddingBottom: "40px"
};

const h1: React.CSSProperties = {
  paddingTop: "40px",
  fontSize: "40px",
  textAlign: "center",
  paddingBottom: "20px"
};
const p: React.CSSProperties = {
  padding: "15px 10% 15px 10%",
  fontSize: "15px",
  textAlign: "center",
  paddingBottom: "20px"

};
const button: React.CSSProperties = {
  backgroundColor: "#5cb85c",
  marginBottom: "10px",
  justifyContent: "center",
  alignSelf: "center",
  color: "#fff",
  borderColor: "#4cae4c",
  padding: "10px 16px",
  fontSize: " 18px",
  lineHeight: "1.3333333",
  marginLeft : "46%"

};

const content1: React.CSSProperties = {
  margin: "30px 10% 30px 10%",
};

const content1h1: React.CSSProperties = {
  fontSize: "40px",
  paddingBottom: "20px"
};
const About = () => {
  return (
    <>
      <div style={contentStyle}>
        <h1 style={h1}>About Us</h1>
        <p style={p}>Saylani Mass Training & Job creation Program is DevBootcamp , which calls itself an “apprenticeship on steroids, ” is one of a new breed of computer programming school that’s proliferating in San Francisco and other US tech hubs. These “hacker boot camps ” promise to teach students how to write code in two or three months and help them get hired as web developers, with starting salaries between $500 – $1000, often within days or weeks of graduation. We’re focused on extreme employ ability.</p>
        <div>
          <a style={button} href="www.google.com">Contact Us</a>
        </div>
      </div>
      <div style={content1}>
        <h1 style={content1h1}>Who We Are</h1>
        <p>Saylani Welfare International Trust has been working for the last 22 years to improve the conditions of the less privileged, helpless, and handicapped individuals. The organization is working day and night to make life happier, especially for the middle class, lower middle class and even lower class. At time of establishing the organization, the founder of Saylani Welfare International Trust and a few of his associates had made a commitment to serve the distressed people living in Pakistan and abroad in all stages of life. It is a blessing in disguise that today the organization is serving humanity in more than 63 areas of life without any discrimination.</p>
      </div>
      <div style={content1}>
        <h1 style={content1h1}>Target Plan</h1>
        <p>Saylani Mass Training has trained about 500 students, and 95 percent of them have been hired as software developers within a few months pf graduation . Its now opening campus in all over Pakistan. <br />
          The target is to train 10,000 Mobile and cloud software developers each year , for the next five years. This will generate additional 50,000 support jobs each year . It is projected that it will inject at least $100,000 per year into the Pakistan Economy. In total it will increase exports by $ 1 billion each year  </p>
      </div>
    </>
  )
}

export default About