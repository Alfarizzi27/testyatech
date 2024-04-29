const mongoose = require('mongoose')

const pasienSchema = new mongoose.Schema({
    namaPasien: String,
    idPasien: String,
    tanggalPengobatan: Date,
    keluhan: [String],
    resepObat: [String],
    biaya: Number,
    menggunakanAsuransi: { type: Boolean, default: false },
    namaAsuransi: { type: String, default: null },
    biayaAsuransi: { type: Number, default: 0 }
})

const Pasien = mongoose.model('Pasien', pasienSchema)

module.exports = Pasien