export class Formatter {
    static PrettifyDateTime(DateTime: string): string {
        const buff: string = DateTime;
        return buff.slice(0, 10) + ' ' + DateTime.slice(11, 16);
    }
}
