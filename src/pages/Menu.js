import { useState } from "react";
import Tabel from "./Tabel";

function Menu() {

    const title = "Daftar Menu Restoran"
    const [menus, setmenu] = useState(
        [
            {idmenu:9, idkategori:37, menu:"Bakwan", gambar:"bakwan.jpg", harga:3000},
            {idmenu:10, idkategori:37, menu:"Martabak", gambar:"martabak.jpg", harga:15000},
            {idmenu:11, idkategori:37, menu:"Risoles", gambar:"risoles.jpg", harga:5000},
            {idmenu:12, idkategori:37, menu:"Tahu Isi", gambar:"tahuisi.jpg", harga:3000},
            {idmenu:15, idkategori:35, menu:"Ikan Bakar", gambar:"ikanbakar.jpg", harga:20000},
            {idmenu:16, idkategori:35, menu:"Ikan Goreng", gambar:"ikangoreng.jpg", harga:15000},
            {idmenu:18, idkategori:35, menu:"Ayam Bakar", gambar:"ayambakar.jpg", harga:15000},
            {idmenu:19, idkategori:35, menu:"Ayam Goreng", gambar:"ayamgoreng.jpg", harga:10000},
        ]
    )

    return (
      <div className="App">
        <Tabel menu={menus} title={title}/>
        <Tabel menu={menus.filter((data) => (data.idkategori===37))} title="Menu Gorengan"/>
      </div>
    );
  }
  
  export default Menu;