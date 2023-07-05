export enum AlertType {
    success = 'sucess',
    info = 'info',
    warning = 'warning',
    error = 'error'
}
export interface Alert {
    text: string,
    type: AlertType,
    title: string
}