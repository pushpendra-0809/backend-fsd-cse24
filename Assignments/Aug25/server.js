const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Student Record System</title>
                
            </head>

            <body>
                <h1>Welcome to Student Record Management System</h1>

                <h2>Add Student</h2>

                <form action="/add-student" method="POST">

                    <label>Student Name:</label><br>
                    <input type="text" name="name" required>
                    <br><br>

                    <label>Roll Number:</label><br>
                    <input type="text" name="rollNumber" required>
                    <br><br>

                    <label>Course:</label><br>
                    <input type="text" name="course" required>
                    <br><br>

                    <label>Email:</label><br>
                    <input type="email" name="email" required>
                    <br><br>

                    <button type="submit">Add Student</button>

                </form>

                <br>

                <a href="/students">View Student Records</a>

            </body>
            </html>
        `);

    }

    else if (req.method === "POST" && req.url === "/add-student") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const data = new URLSearchParams(body);

            const student = {
                name: data.get("name"),
                rollNumber: data.get("rollNumber"),
                course: data.get("course"),
                email: data.get("email")
            };

            fs.readFile("students.json", "utf8", (err, fileData) => {

                let students = [];

                if (!err && fileData) {
                    students = JSON.parse(fileData);
                }

                students.push(student);

                fs.writeFile(
                    "students.json",
                    JSON.stringify(students, null, 2),
                    err => {

                        if (err) {

                            res.writeHead(500, {
                                "Content-Type": "text/html"
                            });

                            res.end("<h1>Error saving student record</h1>");

                        } else {

                            res.writeHead(200, {
                                "Content-Type": "text/html"
                            });

                            res.end(`
                                <h1>Student Added Successfully!</h1>
                                <a href="/">Add Another Student</a>
                                <br><br>
                                <a href="/students">View Students</a>
                            `);

                        }

                    }
                );

            });

        });

    }

    else if (req.method === "GET" && req.url === "/students") {

        fs.readFile("students.json", "utf8", (err, data) => {

            let students = [];

            if (!err && data) {
                students = JSON.parse(data);
            }

            let studentList = `
                <h1>Student Records</h1>
                <table border="1" cellpadding="10">
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>Course</th>
                        <th>Email</th>
                    </tr>
            `;

            students.forEach(student => {

                studentList += `
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.rollNumber}</td>
                        <td>${student.course}</td>
                        <td>${student.email}</td>
                    </tr>
                `;

            });

            studentList += `
                </table>

                <br>

                <a href="/">Go Back</a>
            `;

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(studentList);

        });

    }

    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end("<h1>404 - Page Not Found</h1>");

    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});