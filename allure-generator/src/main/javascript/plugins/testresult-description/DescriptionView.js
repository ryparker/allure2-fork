import $ from "jquery";
import { View } from "backbone.marionette";
import { className } from "../../decorators";
import highlight from "../../utils/highlight";
import template from "./DescriptionView.hbs";
import { unescapeHTML } from "underscore";

@className("pane__section")
class DescriptionView extends View {
  template = template;

  serializeData() {
    return {
      descriptionHtml: this.model.get("descriptionHtml"),
    };
  }

  onRender() {
    const codeBlocks = this.$("pre code");

    if (codeBlocks) {
      codeBlocks.each((_, block) => highlight.highlightBlock(block));
    }
  }
}

export default DescriptionView;
