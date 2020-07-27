import EnvironmentLayout from "./EnvironmentLayout";

allure.api.addTab("environment", {
  title: "tab.environment.name",
  icon: "fa fa-info-circle",
  route: "environment",
  onEnter: (...routeParams) =>
    new EnvironmentLayout({
      name: "environment",
    }),
});
