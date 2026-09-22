import z from "zod";

const registerSchema = z
  .object({
    name: z.string().min(8, "O nome deve ter pelo menos 8 caracteres"),
    email: z.email("E-mail inválido"),
    password: z
      .string()
      .min(6, "A palavra-passe deve ter pelo menos 6 caracteres"),
    institutionId: z.number().optional(),
    facultyId: z.number().optional(),
    courseId: z.number().optional(),
    role: z.enum(["STUDENT", "VISITOR"]),
  })
  .superRefine((data, ctx) => {
    if (data.role === "VISITOR") return;

    if (!data.institutionId || data.institutionId <= 0) {
      ctx.addIssue({
        code: "custom",
        path: ["institutionId"],
        message: "Selecione uma universidade.",
      });
    }

    if (!data.facultyId || data.facultyId <= 0) {
      ctx.addIssue({
        code: "custom",
        path: ["facultyId"],
        message: "Selecione uma faculdade.",
      });
    }

    if (!data.courseId || data.courseId <= 0) {
      ctx.addIssue({
        code: "custom",
        path: ["courseId"],
        message: "Selecione um curso.",
      });
    }
  });
  export default registerSchema;
