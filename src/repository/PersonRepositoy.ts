import {Pedro} from '../model/Pedro'

export const getPerson = () => {
    const a = Pedro.findAll();
    console.log(`🚀 ${a}`);
    return a;
}