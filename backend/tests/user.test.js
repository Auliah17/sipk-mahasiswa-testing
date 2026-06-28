import { jest } from "@jest/globals";

jest.unstable_mockModule("../models/UserModel.js", () => ({
  default: {
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
}));

const User = (await import("../models/UserModel.js")).default;
const { registerUser } = await import("../controllers/UserController.js");

describe("User Controller", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ==========================
  // Register Berhasil
  // ==========================
  test("Register berhasil", async () => {

    User.findOne.mockResolvedValue(null);

    User.create.mockResolvedValue({
      id: 1,
      name: "Auliah",
      nim: "23101123",
      prodi: "Informatika",
      no_whatsapp: "08123456789",
      email: "auliah@gmail.com",
      role: "mahasiswa",
    });

    const req = {
      body: {
        name: "Auliah",
        nim: "23101123",
        prodi: "Informatika",
        no_whatsapp: "08123456789",
        email: "auliah@gmail.com",
        password: "123456",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await registerUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Registrasi berhasil",
      })
    );

  });

  // ==========================
  // Register Gagal (Field Kosong)
  // ==========================
  test("Register gagal - field wajib kosong", async () => {

    const req = {
      body: {
        name: "",
        nim: "",
        email: "",
        password: "",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await registerUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Nama, NIM, email, dan password wajib diisi",
      })
    );

  });

  // ==========================
  // Register Gagal (Email Sudah Ada)
  // ==========================
  test("Register gagal - email sudah terdaftar", async () => {

    User.findOne.mockResolvedValue({
      id: 1,
      email: "auliah@gmail.com",
      nim: "23101123",
    });

    const req = {
      body: {
        name: "Auliah",
        nim: "23101123",
        prodi: "Informatika",
        no_whatsapp: "08123456789",
        email: "auliah@gmail.com",
        password: "123456",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await registerUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        message: "Email atau NIM sudah terdaftar",
      })
    );

  });

});