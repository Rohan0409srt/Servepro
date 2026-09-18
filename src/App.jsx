import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import WelcomeSection from './components/WelcomeSection/WelcomeSection.jsx';
import About from './components/About/About.jsx';
import Service from './components/Services/Services.jsx';
import Appointment from './components/Appointment/Appointment.jsx';
import ClientSlider from './components/ClientSlider/ClientSlider.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import OtherService from './components/OtherServices/OtherServices.jsx';
import Footer from './components/Footer/Footer.jsx';

import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Services from './pages/Services/Services.jsx';
import Industries from "./pages/Industries/Industries.jsx";

import '../src/App.css';
import Gallery from './pages/Gallery/Gallery.jsx';
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import HelpDesk from "./pages/Services/Helpdesk/Helpdesk.jsx";
import Mailroom from "./pages/Services/Mailroom/Mailroom.jsx";
import OfficeSupportStaff from './pages/Services/OfficeSupportStaff/OfficeSupportStaff.jsx';
import Reception from './pages/Services/ReceptionServices/ReceptionServices.jsx';
import StaffingAndPayroll from "./pages/Services/StaffingPayroll/StaffingPayroll.jsx";
import TransportationManagement from "./pages/Services/TransportationManagement/TransportationManagement.jsx";
import BusinessSupport from "./pages/Services/BusinessSupport/BusinessSupport.jsx";
import GardenDevelopment from "./pages/Services/GardenDevelopment/GardenDevelopment.jsx";
import GardenMaintenance from "./pages/Services/GardenMaintenance/GardenMaintenance.jsx";
import Landscaping from "./pages/Services/Landscaping/Landscaping.jsx";
import PotPlant from "./pages/Services/PotPlant/PotPlant.jsx";
import VerticalGarden from "./pages/Services/VerticalGarden/VerticalGarden.jsx";
import Gardening from "./pages/Services/Gardening/Gardening.jsx";
import ITSupport from "./pages/Services/ITSupport/ITSupport.jsx";
import PestControl from "./pages/Services/PestControl/PestControl.jsx";
import BirdNetting from "./pages/Services/BirdNetting/BirdNetting.jsx";
import Fumigation from "./pages/Services/Fumigation/Fumigation.jsx";
import GeneralDisinfection from "./pages/Services/GeneralDisinfestation/GeneralDisinfestation.jsx";
import RodentControl from "./pages/Services/RodentControl/RodentControl.jsx";
import TermiteControl from "./pages/Services/TermiteControl/TermiteControl.jsx";
import AntiLarvae from "./pages/Services/AntiLarvae/AntiLarvae.jsx";
import SoftServices from "./pages/Services/SoftServices/SoftServices.jsx";
import EventMangement from "./pages/Services/EventManagement/EventManagement.jsx";
import GuestHouseManagement from "./pages/Services/GuestHouseManagement/GuestHouseManagement.jsx";
import Housekeeping from "./pages/Services/Housekeeping/Housekeeping.jsx";
import PantryServices from "./pages/Services/PantryServices/PantryServices.jsx";
import WarehouseManagement from "./pages/Services/WarehouseManagement/WarehouseManagement.jsx";
import SpecializedServices from "./pages/Services/SpecializedServices/SpecializedServices.jsx";
import CarpetShampooing from "./pages/Services/CarpetShampooing/CarpetShampooing.jsx";
import GlassFacadeCleaning from "./pages/Services/GlassFacadeCleaning/GlassFacadeCleaning.jsx";
import HomeCleaning from "./pages/Services/HomeCleaning/HomeCleaning.jsx";
import JetCleaning from "./pages/Services/JetCleaning/JetCleaning.jsx";
import OfficeDeepCleaning from "./pages/Services/OfficeDeepCleaning/OfficeDeepCleaning.jsx";
import UpholsteryShampooing from "./pages/Services/UpholsteryShampooing/UpholsteryShampooing.jsx";
import UpholsterySteaming from "./pages/Services/UpholsterySteaming/UpholsterySteaming.jsx";
import WoodenMarblePolishing from "./pages/Services/WoodenMarblePolishing/WoodenMarblePolishing.jsx";
import WarehouseCleaning from "./pages/Services/WarehouseCleaning/WarehouseCleaning.jsx";
import WaterTankCleaning from "./pages/Services/WaterTankCleaning/WaterTankCleaning.jsx";
import TechnicalServices from "./pages/Services/TechnicalServices/TechnicalServices.jsx";
import HVACServices from "./pages/Services/HVACServices/HVACServices.jsx";
import MechnicalElectrical from "./pages/Services/MechnicalElectrical/MechnicalElectrical.jsx";
import OperationMaintance from "./pages/Services/OperationMaintance/OperationMaintance.jsx";
import PlumbingCarpentry from "./pages/Services/PlumbingCarpentry/PlumbingCarpentry.jsx";
import WaterTeatmentSystem from "./pages/Services/WaterTeatmentSystem/WaterTeatmentSystem.jsx";
import CommercialCorporate from "./pages/Industries/CommercialCorporate/CommercialCorporate.jsx";
import Residential from "./pages/Industries/Residential/Residential.jsx";
import Manufacturing from "./pages/Industries/Manufacturing/Manufacturing.jsx";
import Healthcare from "./pages/Industries/Healthcare/Healthcare.jsx";
import Education from "./pages/Industries/Education/Education.jsx";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy/PrivacyPolicy.jsx";
import CancellationRefundPolicy from "./pages/Legal/CancellationRefundPolicy/CancellationRefundPolicy.jsx";
import TermsConditions from "./pages/Legal/TermsConditions/TermsConditions.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
    <ScrollToTop />
      <Navbar />

      <main>
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WelcomeSection />
                <Service />
                <Appointment />
                <About />
                <ClientSlider />
                <Testimonials />
                  <OtherService />
              </>
            }
          />

          {/* About Us Page */}
          <Route
            path="/about"
            element={<AboutUs />}
          />
          <Route
            path="/Services"
            element={<Services />}
          />
          <Route path="/industries" element={<Industries />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/business-support-helpdesk"
           element={<HelpDesk />}
            />
            <Route
            path="/business-support-mailroomservice"
            element={<Mailroom />}
            />
            <Route
               path="/business-support-officesupportstaff"
              element={<OfficeSupportStaff />}
              />
              <Route
             path="/business-support-receptionservice"
              element={<Reception />}
            />
            <Route
            path="/business-support-staffingandpayrollservice"
            element={<StaffingAndPayroll />}
            />
            <Route
            path="/business-support-transportationmangementservice"
             element={<TransportationManagement />}
            />
            <Route
            path="/business-support-service"
            element={<BusinessSupport />}
            />
            <Route
             path="/gardening-service-gardendevelopment"
              element={<GardenDevelopment />}
              />
            <Route
             path="/gardening-service-gardenmaintenanceservice"
               element={<GardenMaintenance />}
            />
            <Route
            path="/gardening-service-landingservice"
             element={<Landscaping />}
            />
            <Route
            path="/gardening-service-plotplantingservice"
            element={<PotPlant />}
            />
            <Route
            path="/gardening-service-verticalgardeningservice"
            element={<VerticalGarden />}
            />
            <Route
             path="/gardening-service"
             element={<Gardening />}
            />
            <Route
             path="/it-support-service"
              element={<ITSupport />}
            />
            <Route
               path="/pest-control-service"
               element={<PestControl />}
            />
            <Route
            path="/pest-control-service-birdnetting"
             element={<BirdNetting />}
            />
            <Route
            path="/pest-control-service-fumigation"
            element={<Fumigation />}
            />
           <Route
             path="/pest-control-service-generaldisfection"
            element={<GeneralDisinfection />}
            />
            <Route
             path="/pest-control-service-rodantcontrol"
             element={<RodentControl />}
            />
            <Route
            path="/pest-control-service-termitecontrolservice"
              element={<TermiteControl />}
            />
           <Route
             path="/pest-control-service-anitlarvaetreatement"
             element={<AntiLarvae />}
              />
            <Route
               path="/soft-services"
                element={<SoftServices />}
              />
              <Route
                path="/soft-service-eventmanagementservice"
                element={<EventMangement />}
              />
              <Route
                 path="/soft-service-guestmangementservices"
                element={<GuestHouseManagement />}
              />
                <Route
                path="/soft-service-housekeeping"
                 element={<Housekeeping />}
              />
              <Route
                path="/soft-service-pantryservices"
                 element={<PantryServices />}
              />
              <Route
                path="/soft-service-warehousemangement"
                element={<WarehouseManagement />}
              />
              <Route
                 path="/specialized-cleaning-service"
               element={<SpecializedServices />}
              />
              <Route
              path="/specialized-cleaning-service-carpetshampooing"
                element={<CarpetShampooing />}
              />
              <Route
             path="/specialized-cleaning-service-g-f-cleaning"
               element={<GlassFacadeCleaning />}
              />
            <Route
              path="/specialized-cleaning-service-homecleaning"
                element={<HomeCleaning />}
            />
            <Route
            path="/specialized-cleaning-service-jetcleaning"
            element={<JetCleaning />}
            />
            <Route
  path="/specialized-cleaning-service-officedeepcleaning"
  element={<OfficeDeepCleaning />}
/>

<Route
  path="/specialized-cleaning-service-upholsteryshampooingservice"
  element={<UpholsteryShampooing />}
/>

<Route
  path="/specialized-cleaning-service-upholsterysteamingservice"
  element={<UpholsterySteaming />}
/>
<Route
  path="/specialized-cleaning-service-w-m-polishing"
  element={<WoodenMarblePolishing />}
/>

<Route
  path="/specialized-cleaning-service-warehousecleaning"
  element={<WarehouseCleaning />}
/>

<Route
  path="/specialized-cleaning-service-watertankcleaning"
  element={<WaterTankCleaning />}
/>
<Route
  path="/technical-service"
  element={<TechnicalServices />}
/>
<Route
  path="/technical-service-mechnical-electrical"
  element={<MechnicalElectrical />}
/>

<Route
  path="/technical-service-operationandmaintance"
  element={<OperationMaintance />}
/>

<Route
  path="/technical-service-plumbingandcarpentry"
  element={<PlumbingCarpentry />}
/>

<Route
  path="/technical-service-hvac"
  element={<HVACServices />}
/>

<Route
  path="/technical-service-watertreatementsystems"
  element={<WaterTeatmentSystem />}
/>
<Route
  path="/industry-commercial-corporate-facility"
  element={<CommercialCorporate />}
/>

<Route
  path="/industry-residential-facility"
  element={<Residential />}
/>

<Route
  path="/industry-manufacturing-facility"
  element={<Manufacturing />}
/>

<Route
  path="/industry-healthcare-facility"
  element={<Healthcare />}
/>

<Route
  path="/industry-education-facility"
  element={<Education />}
/>
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route
  path="/cancellation-refund-policy"
  element={<CancellationRefundPolicy />}
/>
<Route
  path="/terms-conditions"
  element={<TermsConditions />}
/>
        </Routes>
      </main>

    
      <Footer />
    </>
  );
}