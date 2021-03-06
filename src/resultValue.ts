const bs58check = require('bs58check');

export class ResultValue {
    
    public readonly asInteger: string;
    public readonly asByteArray: string;
    public readonly asString: string;
    public readonly asAddress: string;

    constructor(result: any) {
        let value = result.value;
        if ((value !== null) && (value !== undefined)) {
            this.asString = '';
            this.asAddress = '';
            this.asInteger = '';
            if (result.type === 'Integer') {
                this.asInteger = value;
                this.asByteArray = '0x' + ResultValue.addLeadingZeroes(parseInt(value).toString(16));
            } else {
                const buffer = Buffer.from(value, 'hex');
                this.asByteArray = '0x' + buffer.toString('hex');
                this.asString = buffer.toString();
                if (value.length === 42) {
                    this.asAddress = bs58check.encode(buffer);
                }
                if (value.length > 0) {
                    this.asInteger = BigInt(this.asByteArray).toString();
                }
            }
        } else {
            this.asInteger = '0';
            this.asByteArray = '(empty)';
            this.asString = '(empty)';
            this.asAddress = '(empty)';
        }
    }

    public static addLeadingZeroes(input: string) {
        if (input.length === 0) {
            return '00';
        } else if ((input.length % 2) === 1) {
            return '0' + input;
        } else {
            return input;
        }
    }
}