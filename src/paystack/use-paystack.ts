import {PaystackProps} from './types';
import {callPaystackPop} from './paystack-actions';

export default function usePaystackPayment(
  options: PaystackProps,
): (callback?: Function, onClose?: Function) => void {
  const {
    publicKey,
    firstname,
    lastname,
    phone,
    email,
    amount,
    reference,
    metadata = {},
    currency = 'NGN',
    channels,
    label = '',
    plan = '',
    quantity = '',
    subaccount = '',
    transaction_charge = 0,
    bearer = 'account',
    split,
    split_code,
  } = options;

  function initializePayment(callback?: Function, onClose?: Function): void {
      const paystackArgs: Record<string, any> = {
        callback: callback ? callback : (): any => null,
        onClose: onClose ? onClose : (): any => null,
        key: publicKey,
        ref: reference,
        email,
        firstname,
        lastname,
        phone,
        amount,
        currency,
        plan,
        quantity,
        'data-custom-button': options['data-custom-button'] || '',
        channels,
        subaccount,
        transaction_charge,
        bearer,
        label,
        metadata,
        split,
        split_code,
      };
      callPaystackPop(paystackArgs);
  }

  return initializePayment;
}
