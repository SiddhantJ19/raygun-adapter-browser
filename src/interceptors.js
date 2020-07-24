import logs from './logs';

const enableAll = () => {
    // const log = console.log.bind(console);
    
    // console.log = (...args) => {
    //     logs.add(args.join(' '));
    //     log(...args);
    // };
    
    const info = console.info.bind(console);
    
    console.info = (...args) => {
        logs.add(args.join(' '));
        info(...args);
    };
    
    const error = console.error.bind(console);
    
    console.error = (...args) => {
        logs.add(args.join(' '));
        error(...args);
    };
};

export default { enableAll };