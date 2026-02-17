import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";

// Consolidated Pages
import { SolutionsPage } from "./pages/solutions-page";
import { ProductsPage } from "./pages/products-page";
import { AIPage } from "./pages/ai-page";
import { ResourcesPage } from "./pages/resources-page";
import { AboutPage } from "./pages/about-page";

// Solutions Individual Pages
import { UtilityScalePage } from "./pages/solutions/utility-scale";
import { PerformanceOptimizationPage } from "./pages/solutions/performance-optimization";
import { AssetManagementPage } from "./pages/solutions/asset-management";
import { RooftopCommercialPage } from "./pages/solutions/rooftop-commercial";
import { PMKusumPage } from "./pages/solutions/pm-kusum";
import { SuryaGharPage } from "./pages/solutions/surya-ghar";
import { SolarPumpPage } from "./pages/solutions/solar-pump";

// Products Individual Pages
import { RemoteMonitoringPage } from "./pages/products/rms";
import { WeatherMonitoringPage } from "./pages/products/weather-monitoring";
import { DashboardPage } from "./pages/products/dashboard";
import { MobileAppPage } from "./pages/products/mobile-app";
import { DataLoggerPage } from "./pages/products/data-logger";
import { PowerPlantControllerPage } from "./pages/products/power-plant-controller";
import { ControlPanelPage } from "./pages/products/control-panel";
import { SCADAIntegrationPage } from "./pages/products/scada-integration";

// AI Individual Pages
import { PredictiveAnalysisPage } from "./pages/ai/predictive-analysis";
import { MaintenanceIntelligencePage } from "./pages/ai/maintenance-intelligence";
import { SoilingDetectionPage } from "./pages/ai/soiling-detection";
import { VoiceSummaryPage } from "./pages/ai/voice-summary";
import { EnergyForecastingPage } from "./pages/ai/energy-forecasting";
import { SolarCompassPage } from "./pages/ai/solar-compass";

// Resources Individual Pages
import { CaseStudiesPage } from "./pages/resources/case-studies";
import { ArticlesPage } from "./pages/resources/articles";
import { TutorialsPage } from "./pages/resources/tutorials";
import { EventsPage } from "./pages/resources/events";
import { DataSheetsPage } from "./pages/resources/data-sheets";
import { DownloadsPage } from "./pages/resources/downloads";

// About Individual Pages
import { VisionPage } from "./pages/about/vision";
import { TeamPage } from "./pages/about/team";
import { JourneyPage } from "./pages/about/journey";
import { CareersPage } from "./pages/about/careers";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "solutions",
        Component: SolutionsPage,
      },
      {
        path: "solutions/utility-scale",
        Component: UtilityScalePage,
      },
      {
        path: "solutions/performance-optimization",
        Component: PerformanceOptimizationPage,
      },
      {
        path: "solutions/asset-management",
        Component: AssetManagementPage,
      },
      {
        path: "solutions/rooftop-commercial",
        Component: RooftopCommercialPage,
      },
      {
        path: "solutions/pm-kusum",
        Component: PMKusumPage,
      },
      {
        path: "solutions/surya-ghar",
        Component: SuryaGharPage,
      },
      {
        path: "solutions/solar-pump",
        Component: SolarPumpPage,
      },
      {
        path: "products",
        Component: ProductsPage,
      },
      {
        path: "products/remote-monitoring",
        Component: RemoteMonitoringPage,
      },
      {
        path: "products/weather-monitoring",
        Component: WeatherMonitoringPage,
      },
      {
        path: "products/dashboard",
        Component: DashboardPage,
      },
      {
        path: "products/mobile-app",
        Component: MobileAppPage,
      },
      {
        path: "products/data-logger",
        Component: DataLoggerPage,
      },
      {
        path: "products/power-plant-controller",
        Component: PowerPlantControllerPage,
      },
      {
        path: "products/control-panel",
        Component: ControlPanelPage,
      },
      {
        path: "products/scada-integration",
        Component: SCADAIntegrationPage,
      },
      {
        path: "ai",
        Component: AIPage,
      },
      {
        path: "ai/predictive-analysis",
        Component: PredictiveAnalysisPage,
      },
      {
        path: "ai/maintenance-intelligence",
        Component: MaintenanceIntelligencePage,
      },
      {
        path: "ai/soiling-detection",
        Component: SoilingDetectionPage,
      },
      {
        path: "ai/voice-summary",
        Component: VoiceSummaryPage,
      },
      {
        path: "ai/energy-forecasting",
        Component: EnergyForecastingPage,
      },
      {
        path: "ai/solar-compass",
        Component: SolarCompassPage,
      },
      {
        path: "resources",
        Component: ResourcesPage,
      },
      {
        path: "resources/case-studies",
        Component: CaseStudiesPage,
      },
      {
        path: "resources/articles",
        Component: ArticlesPage,
      },
      {
        path: "resources/tutorials",
        Component: TutorialsPage,
      },
      {
        path: "resources/events",
        Component: EventsPage,
      },
      {
        path: "resources/data-sheets",
        Component: DataSheetsPage,
      },
      {
        path: "resources/downloads",
        Component: DownloadsPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "about/vision",
        Component: VisionPage,
      },
      {
        path: "about/team",
        Component: TeamPage,
      },
      {
        path: "about/journey",
        Component: JourneyPage,
      },
      {
        path: "about/careers",
        Component: CareersPage,
      },
    ],
  },
]);
