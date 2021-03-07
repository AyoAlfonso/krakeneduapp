// @ts-nocheck
import usePaystackPayment from "./use-paystack";

export default function compress(config, defaultConfig){
    return usePaystackPayment(Object.assign(config, defaultConfig, { reference: new Date().getTime() })) as const
}