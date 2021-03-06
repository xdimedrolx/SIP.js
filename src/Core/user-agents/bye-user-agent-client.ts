import { C } from "../../Constants";
import { InviteDialog } from "../dialogs";
import { OutgoingByeRequest, OutgoingRequestDelegate, RequestOptions } from "../messages";
import { NonInviteClientTransaction } from "../transactions";
import { UserAgentClient } from "./user-agent-client";

export class ByeUserAgentClient extends UserAgentClient implements OutgoingByeRequest {
  constructor(
    dialog: InviteDialog,
    delegate?: OutgoingRequestDelegate,
    options?: RequestOptions
  ) {
    const message = dialog.createOutgoingRequestMessage(C.BYE, options);
    super(NonInviteClientTransaction, dialog.userAgentCore, message, delegate);
    dialog.dispose();
  }
}
