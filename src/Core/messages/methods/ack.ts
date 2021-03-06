import {
  IncomingRequest as IncomingRequestMessage,
  OutgoingRequest as OutgoingRequestMessage
} from "../../../SIPMessage";

// Note: As a request with no response, ACK is a special case.

/** ACK message sent from remote client to local server. */
export interface IncomingAckRequest {
  /** The incoming message. */
  readonly message: IncomingRequestMessage;
}

/** ACK message sent from local client to remote server. */
export interface OutgoingAckRequest {
  /** The outgoing message. */
  readonly message: OutgoingRequestMessage;
}
