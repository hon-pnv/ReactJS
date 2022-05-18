import React,{Component} from 'react';

function ShowPro(props){
    return(
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img src={props.image} height="200px" width="200px" />
            <p>{props.tittle}</p>
            <p>Price: 500K</p>
        </div>
    )
}
function Products() {
		return(
			<div>
				<div className="container">
					<div className="row">
						<ShowPro tittle="Sản phẩm số 1" image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lazada.vn%2Fproducts%2Fuoey-kpop-korean-celebrity-lisa-blackpink-graceful-sweater-red-knitted-large-pocket-v-neck-hoodies-women-streetwear-fashion-loose-harajuku-sweatshirts-female-coat-i1632662635-s7128188784.html&psig=AOvVaw1vsexi_q8ui4xIoXZd9JPs&ust=1651717508210000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIikhoPkxPcCFQAAAAAdAAAAABAD"></ShowPro>
						<ShowPro tittle="Sản phẩm số 1" image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbazaarvietnam.vn%2Fnhan-vat%2Fnhan-dip-sinh-nhat-lisa-blackpink-dem-lai-5-ly-do-vi-sao-lisa-duoc-fan-ham-mo-yeu-quy%2F&psig=AOvVaw2TRjtnRb-n7znfgc_FeMpw&ust=1651717551013000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDj35XkxPcCFQAAAAAdAAAAABAD"></ShowPro>
						<ShowPro tittle="Sản phẩm số 1" image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elleman.vn%2Fnhan-vat%2Fsinh-nhat-ca-sy-lisa-blackpink&psig=AOvVaw2TRjtnRb-n7znfgc_FeMpw&ust=1651717551013000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDj35XkxPcCFQAAAAAdAAAAABAJ"></ShowPro>
						<ShowPro tittle="Sản phẩm số 1" image="https://www.google.com/url?sa=i&url=https%3A%2F%2Flaodong.vn%2Fgiai-tri%2Flisa--blackpink-tiep-tuc-lap-ky-luc-voi-money-961804.ldo&psig=AOvVaw2TRjtnRb-n7znfgc_FeMpw&ust=1651717551013000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDj35XkxPcCFQAAAAAdAAAAABAa"></ShowPro>
					</div>
				</div>
			</div>
		)
}
export default Products;
