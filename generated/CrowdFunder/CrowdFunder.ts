// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CampaignAdded extends ethereum.Event {
  get params(): CampaignAdded__Params {
    return new CampaignAdded__Params(this);
  }
}

export class CampaignAdded__Params {
  _event: CampaignAdded;

  constructor(event: CampaignAdded) {
    this._event = event;
  }

  get _campaignAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _creatorType(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _creatorName(): string {
    return this._event.parameters[3].value.toString();
  }

  get _title(): string {
    return this._event.parameters[4].value.toString();
  }

  get _description(): string {
    return this._event.parameters[5].value.toString();
  }

  get _tags(): Array<string> {
    return this._event.parameters[6].value.toStringArray();
  }

  get _goalAmount(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get _duration(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class CampaignCanceled extends ethereum.Event {
  get params(): CampaignCanceled__Params {
    return new CampaignCanceled__Params(this);
  }
}

export class CampaignCanceled__Params {
  _event: CampaignCanceled;

  constructor(event: CampaignCanceled) {
    this._event = event;
  }

  get _campaignAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CrowdFunder__getCampaignResultValue0Struct extends ethereum.Tuple {
  get creator(): Address {
    return this[0].toAddress();
  }

  get creatorType(): i32 {
    return this[1].toI32();
  }

  get creatorName(): string {
    return this[2].toString();
  }

  get title(): string {
    return this[3].toString();
  }

  get description(): string {
    return this[4].toString();
  }

  get tags(): Array<string> {
    return this[5].toStringArray();
  }

  get goalAmount(): BigInt {
    return this[6].toBigInt();
  }

  get duration(): BigInt {
    return this[7].toBigInt();
  }

  get currentBalance(): BigInt {
    return this[8].toBigInt();
  }

  get currentState(): i32 {
    return this[9].toI32();
  }
}

export class CrowdFunder extends ethereum.SmartContract {
  static bind(address: Address): CrowdFunder {
    return new CrowdFunder("CrowdFunder", address);
  }

  getCampaign(
    _campaignAddress: Address
  ): CrowdFunder__getCampaignResultValue0Struct {
    let result = super.call(
      "getCampaign",
      "getCampaign(address):((address,uint8,string,string,string,string[],uint256,uint256,uint256,uint8))",
      [ethereum.Value.fromAddress(_campaignAddress)]
    );

    return changetype<CrowdFunder__getCampaignResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getCampaign(
    _campaignAddress: Address
  ): ethereum.CallResult<CrowdFunder__getCampaignResultValue0Struct> {
    let result = super.tryCall(
      "getCampaign",
      "getCampaign(address):((address,uint8,string,string,string,string[],uint256,uint256,uint256,uint8))",
      [ethereum.Value.fromAddress(_campaignAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<CrowdFunder__getCampaignResultValue0Struct>(value[0].toTuple())
    );
  }
}

export class AddCampaignCall extends ethereum.Call {
  get inputs(): AddCampaignCall__Inputs {
    return new AddCampaignCall__Inputs(this);
  }

  get outputs(): AddCampaignCall__Outputs {
    return new AddCampaignCall__Outputs(this);
  }
}

export class AddCampaignCall__Inputs {
  _call: AddCampaignCall;

  constructor(call: AddCampaignCall) {
    this._call = call;
  }

  get _creatorType(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _creatorName(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _title(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _tags(): Array<string> {
    return this._call.inputValues[4].value.toStringArray();
  }

  get _goalAmount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _duration(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class AddCampaignCall__Outputs {
  _call: AddCampaignCall;

  constructor(call: AddCampaignCall) {
    this._call = call;
  }
}

export class CancelCampaignCall extends ethereum.Call {
  get inputs(): CancelCampaignCall__Inputs {
    return new CancelCampaignCall__Inputs(this);
  }

  get outputs(): CancelCampaignCall__Outputs {
    return new CancelCampaignCall__Outputs(this);
  }
}

export class CancelCampaignCall__Inputs {
  _call: CancelCampaignCall;

  constructor(call: CancelCampaignCall) {
    this._call = call;
  }

  get _campaignAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CancelCampaignCall__Outputs {
  _call: CancelCampaignCall;

  constructor(call: CancelCampaignCall) {
    this._call = call;
  }
}
