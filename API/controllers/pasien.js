const Pasien = require('../models/pasien')

class Pasiens {
    static async createUser(req, res) {
        try {
            let { namaPasien, idPasien, tanggalPengobatan, keluhan, resepObat, biaya, menggunakanAsuransi, namaAsuransi, biayaAsuransi } = req.body

            menggunakanAsuransi = (menggunakanAsuransi === "iya") ? true : false;

            const datas = new Pasien({
                namaPasien,
                idPasien,
                tanggalPengobatan,
                keluhan,
                resepObat,
                biaya,
                menggunakanAsuransi,
                namaAsuransi,
                biayaAsuransi
            })
            console.log(datas);
            await datas.save()
            res.status(200).json(datas)

        } catch (error) {
            console.log(error, "<<eror dari controller");
        }
    }
}


module.exports = Pasiens