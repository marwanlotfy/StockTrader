import home from './component/home';
import portfolio from './component/portfolio';
import stock from './component/stocks';
import endday from './component/endday'
export default [{
    path : '',
    component : home,  
},
{
    path : '/portfolio',
    component : portfolio
},
{
    path : '/stock',
    component : stock
},
{
    path : '/endday',
    component : endday,
}]