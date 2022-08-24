-- CreateTable
CREATE TABLE "user" (
    "user_id" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "projects" (
    "project_id" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "links" TEXT[],
    "engines" TEXT[],
    "userUser_id" TEXT,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("project_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_id_key" ON "user"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_nickname_key" ON "user"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "projects_project_id_key" ON "projects"("project_id");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_userUser_id_fkey" FOREIGN KEY ("userUser_id") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
