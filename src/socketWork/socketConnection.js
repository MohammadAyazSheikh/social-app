import { serverUrl } from '.././config';
import socketClient from 'socket.io-client';


export const socket =  socketClient(serverUrl);


