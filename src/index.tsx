import {
  createIntegration,
  createComponent,
  RuntimeContext,
} from "@gitbook/runtime";
import { formUrl } from "./formUrl";

type IntegrationContext = {
  partnerId: string;
  theme: string;
  course: string;
} & RuntimeContext;
type IntegrationBlockProps = {};
type IntegrationBlockState = {};
type IntegrationAction = {};

const webframeModalButton = createComponent<
  IntegrationBlockProps,
  IntegrationBlockState,
  IntegrationAction,
  IntegrationContext
>({
  componentId: "mighty-modal-button",
  render: async (element, context) => {
    const { buttonText } = context.environment.spaceInstallation.configuration;
    return {
      type: "block",
      children: [
        {
          type: "button",
          label: buttonText ?? 'Learn and earn',
          onPress: {
            action: "@ui.modal.open",
            componentId: "mighty-modal",
            props: { something: false },
          },
        },
      ],
    };
  },
});

const webframeModal = createComponent<
  IntegrationBlockProps,
  IntegrationBlockState,
  IntegrationAction,
  IntegrationContext
>({
  componentId: "mighty-modal",
  render: async (element, context) => {
    const { theme, targetUrl, partnerId } = context.environment.spaceInstallation.configuration;

    const url = formUrl({ theme, targetUrl, partnerId });
    return (
      <modal size="fullscreen">
        <webframe source={{ url }} aspectRatio={0.7}/>
      </modal>
    );
  },
});

const webframeBlock = createComponent<
  IntegrationBlockProps,
  IntegrationBlockState,
  IntegrationAction,
  IntegrationContext
>({
  componentId: "mighty-widget",
  render: async (element, context) => {
    const { theme, targetUrl, partnerId } = context.environment.spaceInstallation.configuration;

    const url = formUrl({ theme, targetUrl, partnerId });
    return {
      type: "block",
      children: [
        {
          type: "webframe",
          source: {
            url,
          },
          aspectRatio: 1,
        },
      ],
    };
  },
});

export default createIntegration({
  components: [webframeBlock, webframeModalButton, webframeModal],
});
