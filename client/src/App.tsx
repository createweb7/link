import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import StudyDestinations from "@/pages/study-destinations";
import Services from "@/pages/services";
import SuccessStories from "@/pages/success-stories";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import BookConsultation from "@/pages/book-consultation";
import CountryDetail from "@/pages/country-detail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/destinations" component={StudyDestinations} />
      <Route path="/destinations/:country" component={CountryDetail} />
      <Route path="/services" component={Services} />
      <Route path="/success-stories" component={SuccessStories} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/book-consultation" component={BookConsultation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
