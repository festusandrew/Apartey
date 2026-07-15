import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { AboutPage } from "./components/AboutPage";
import { BlogPage } from "./components/BlogPage";
import { BlogArticlePage } from "./components/BlogArticlePage";
import { NotFoundPage } from "./components/NotFoundPage";
import { ContactPage } from "./components/ContactPage";
import { ReviewDetailPage } from "./components/ReviewDetailPage";
import { WriteReviewPage } from "./components/WriteReviewPage";
import { CookieSettingsPage } from "./components/CookieSettingsPage";
import { RenterProfilePage } from "./components/RenterProfilePage";
import { HomeownerProfilePage } from "./components/HomeownerProfilePage";
import { HomeownerListingDetailsPage } from "./components/HomeownerListingDetailsPage";
import { PropertyDetailsPage } from "./components/PropertyDetailsPage";
import { HomeownerPublicProfilePage } from "./components/HomeownerPublicProfilePage";
import { AgentProfilePage } from "./components/AgentProfilePage";
import { AdminProfilePage } from "./components/AdminProfilePage";
import { PropertyManagerProfilePage } from "./components/PropertyManagerProfilePage";
import { ReviewsPage } from "./components/ReviewsPage";
import { ReviewRequestPage } from "./components/ReviewRequestPage";
import { RenterBoardPage } from "./components/RenterBoardPage";
import { ServicesPage } from "./components/ServicesPage";
import { ListYourServicePage } from "./components/ListYourServicePage";
import { ServiceDetailPage } from "./components/ServiceDetailPage";
import { PartnersPage } from "./components/PartnersPage";
import { PartnerApplyPage } from "./components/PartnerApplyPage";
import { AffiliatesPage } from "./components/AffiliatesPage";
import { AffiliateHubPage } from "./components/AffiliateHubPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/profile",
    Component: RenterProfilePage,
  },
  {
    path: "/renter",
    Component: RenterProfilePage,
  },
  {
    path: "/homeowner",
    Component: HomeownerProfilePage,
  },
  {
    path: "/agent",
    Component: AgentProfilePage,
  },
  {
    path: "/property-manager",
    Component: PropertyManagerProfilePage,
  },
  {
    path: "/admin",
    Component: AdminProfilePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/blog",
    Component: BlogPage,
  },
  {
    path: "/blog/:slug",
    Component: BlogArticlePage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/reviews/:id",
    Component: ReviewDetailPage,
  },
  {
    path: "/reviews/:id/write",
    Component: WriteReviewPage,
  },
  {
    path: "/write-review",
    Component: WriteReviewPage,
  },
  {
    path: "/cookies",
    Component: CookieSettingsPage,
  },
  {
    path: "/reviews",
    Component: ReviewsPage,
  },
  {
    path: "/review/property/:id",
    Component: ReviewRequestPage,
  },
  {
    path: "/renter-board",
    Component: RenterBoardPage,
  },
  {
    path: "/services",
    Component: ServicesPage,
  },
  {
    path: "/services/list-your-service",
    Component: ListYourServicePage,
  },
  {
    path: "/services/:id",
    Component: ServiceDetailPage,
  },
  {
    path: "/partners",
    Component: PartnersPage,
  },
  {
    path: "/partners/apply",
    Component: PartnerApplyPage,
  },
  {
    path: "/affiliates",
    Component: AffiliatesPage,
  },
  {
    path: "/earn",
    Component: AffiliateHubPage,
  },
  {
    path: "/insights",
    Component: NotFoundPage,
  },
  {
    path: "/listings",
    Component: NotFoundPage,
  },
  {
    path: "/properties/:id",
    Component: PropertyDetailsPage,
  },
  {
    path: "/homeowners/:id",
    Component: HomeownerPublicProfilePage,
  },
  {
    path: "/homeowner/properties/:id",
    Component: HomeownerListingDetailsPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);