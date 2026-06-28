import { jest } from "@jest/globals";

jest.unstable_mockModule("../models/KegiatanModel.js", () => ({
  default: {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
  },
}));

const Kegiatan = (await import("../models/KegiatanModel.js")).default;

const {
  getKegiatan,
  getKegiatanById,
  createPengajuanKegiatan,
} = await import("../controllers/KegiatanController.js");

describe("Kegiatan Controller", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ==========================
  // GET Semua Kegiatan
  // ==========================
  test("GET semua kegiatan berhasil", async () => {

    Kegiatan.findAll.mockResolvedValue([
      {
        id: 1,
        nama: "Seminar AI",
        status: "disetujui",
      },
    ]);

    const req = {};

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getKegiatan(req, res);

    expect(res.status).toHaveBeenCalledWith(200);

  });

  // ==========================
  // GET Detail Kegiatan
  // ==========================
  test("GET detail kegiatan berhasil", async () => {

    Kegiatan.findOne.mockResolvedValue({
      id: 1,
      nama: "Seminar AI",
      status: "disetujui",
    });

    const req = {
      params: {
        id: 1,
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getKegiatanById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);

  });

  // ==========================
  // Detail Tidak Ditemukan
  // ==========================
  test("GET detail kegiatan gagal", async () => {

    Kegiatan.findOne.mockResolvedValue(null);

    const req = {
      params: {
        id: 100,
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getKegiatanById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);

  });

  // ==========================
  // Pengajuan Berhasil
  // ==========================
  test("Pengajuan kegiatan berhasil", async () => {

    Kegiatan.create.mockResolvedValue({
      id: 1,
      nama: "Workshop",
    });

    const req = {
      body: {
        nama: "Workshop",
        kategori: "Seminar",
        tanggal: "2026-06-30",
        lokasi: "ITH",
        kuota: 100,
      },
      user: {
        name: "Auliah",
        nim: "23101123",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createPengajuanKegiatan(req, res);

    expect(res.status).toHaveBeenCalledWith(201);

  });

  // ==========================
  // Pengajuan Gagal
  // ==========================
  test("Pengajuan gagal karena field kosong", async () => {

    const req = {
      body: {},
      user: {
        name: "Auliah",
        nim: "23101123",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createPengajuanKegiatan(req, res);

    expect(res.status).toHaveBeenCalledWith(400);

  });

});