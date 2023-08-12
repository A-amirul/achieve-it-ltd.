import About from "./About";
import CEOSection from "./CEOSection";
import LeadershipTeam from "./LeadershipTeam";
import OurGoal from "./OurGoal";
import OurStory from "./OurStory";
const AboutSection = () => {
  return (
    <div className=" ">
      
      <About></About>
      
      <OurStory></OurStory>
      <CEOSection></CEOSection>
      <OurGoal></OurGoal>
      <div className="mt-16 mb-10">
        <h1 className="text-5xl font-semibold px-5 text-center">
          {" "}
          LEADERSHIP TEAM{" "}
        </h1>
        <LeadershipTeam></LeadershipTeam>
      </div>
    </div>
  );
};

export default AboutSection;
