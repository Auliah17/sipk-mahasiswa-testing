import { jest } from "@jest/globals";

jest.unstable_mockModule("../models/KegiatanModel.js", () => ({
  default: {
    findAll: jest.fn(),
    create: jest.fn(),
    findByPk: jest.fn(),
  },
}));

const Kegiatan = (await import("../models/KegiatanModel.js")).default;

const {
  getAllKegiatanAdmin,
  createPengajuanKegiatan,
  updateKegiatanAdmin,
  verifyKegiatan,
  deleteKegiatan,
} = await import("../controllers/AdminKegiatanController.js");

describe("Admin Kegiatan Controller", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ==========================
  // GET Semua Kegiatan
  // ==========================
  test("Admin melihat semua kegiatan", async () => {

    Kegiatan.findAll.mockResolvedValue([
      {
        id: 1,
        nama: "Seminar AI",
      },
    ]);

    const req = {};

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllKegiatanAdmin(req, res);

    expect(res.status).toHaveBeenCalledWith(200);

  });

  // ==========================
  // POST Kegiatan
  // ==========================
  test("Admin membuat kegiatan", async () => {

    Kegiatan.create.mockResolvedValue({
      id: 1,
      nama: "Workshop",
    });

    const req = {
      body: {
        nama: "Workshop",
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
  // UPDATE
  // ==========================
  test("Admin update kegiatan", async () => {

    const update = jest.fn();

    Kegiatan.findByPk.mockResolvedValue({
      update,
    });

    const req = {
      params: {
        id: 1,
      },
      body: {
        nama: "Workshop Baru",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await updateKegiatanAdmin(req, res);

    expect(update).toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(200);

  });

  // ==========================
  // VERIFIKASI
  // ==========================
  test("Admin verifikasi kegiatan", async () => {

    const update = jest.fn();

    Kegiatan.findByPk.mockResolvedValue({
      update,
    });

    const req = {
      params: {
        id: 1,
      },
      body: {
        status: "disetujui",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await verifyKegiatan(req, res);

    expect(update).toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(200);

  });

  // ==========================
  // DELETE
  // ==========================
  test("Admin hapus kegiatan", async () => {

    const destroy = jest.fn();

    Kegiatan.findByPk.mockResolvedValue({
      destroy,
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

    await deleteKegiatan(req, res);

    expect(destroy).toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(200);

  });

});