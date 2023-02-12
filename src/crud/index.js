import React, { Component } from "react";
import Tabel from "./Tabel";
import Formulir from "./Formulir";

export default class crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            harga: this.state.harga,
            deskripsi: this.state.deskripsi,
          },
        ],
      });
    } else {
      const pilihanManakananLain = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

        this.setState({
          makanans: [
            ...pilihanManakananLain,
            {
              id: this.state.makanans.length + 1,
              nama: this.state.nama,
              harga: this.state.harga,
              deskripsi: this.state.deskripsi,
            },
          ],
        });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const pilihanManakanan = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      nama: pilihanManakanan[0].nama,
      deskripsi: pilihanManakanan[0].deskripsi,
      harga: pilihanManakanan[0].harga,
      id: pilihanManakanan[0].id,
    });
  };

  hapusData = (id) => {
    const makananBaru = this.state.makanans
    .filter((makanan) => makanan.id !== id)
    .map((filterMakanan) => {
      return filterMakanan;
    });

    this.setState({
      makanans : makananBaru
    })

  }

  render() {
    return (
      <div className="container mt-4">
        <h2>REACT JS</h2>
        <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData} />
        <Formulir
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
