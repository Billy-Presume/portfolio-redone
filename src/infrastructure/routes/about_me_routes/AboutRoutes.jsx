import { Route, Routes } from "react-router-dom";
import Background from '../../../components/about_me_components/Background.component';
import WorkHistory from '../../../components/about_me_components/WorkHistory.component';
import Education from '../../../components/about_me_components/Education.component';
import Skills from '../../../components/about_me_components/Skills.component';
import Interests from '../../../components/about_me_components/Interests.component';
import VolunteerWork from '../../../components/about_me_components/VolunteerWork.component';

export const AboutRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Background />} />
      <Route path="/work-history" element={<WorkHistory />} />
      <Route path="/education" element={<Education />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/interests" element={<Interests />} />
      <Route path="/volunteer-work" element={<VolunteerWork />} />
    </Routes>
  );
};
