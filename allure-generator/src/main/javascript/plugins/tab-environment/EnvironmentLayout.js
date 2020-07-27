import AppLayout from "../../layouts/application/AppLayout";
import EnvironmentModel from "./EnvironmentModel";
import EnvironmentView from "./EnvironmentView";

export default class EnvironmentLayout extends AppLayout {
  initialize({ name }) {
    super.initialize();
    this.items = new EnvironmentModel({ name });
  }

  loadData() {
    return this.items.fetch();
  }

  getContentView() {
    return new EnvironmentView(this.items);
  }
}
