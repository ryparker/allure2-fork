import "./styles.scss";

import { View } from "backbone.marionette";
import template from "./EnvironmentView.hbs";
export default class EnvironmentView extends View {
  template = template;

  initialize(model) {
    this.model = model;
    this.listLimit = this.model.get("items").length;
  }

  serializeData() {
    const items = this.model.get("items");
    return {
      items: items.slice(0, this.listLimit),
      overLimit: items.length > this.listLimit,
    };
  }
}
