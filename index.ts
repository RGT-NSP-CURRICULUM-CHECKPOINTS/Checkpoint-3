// Simple Express Application: Invoice CRUD API With TypeScript
// Week 3 Checkpoint Project

import express from "express";
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store
let invoices = [
  {
    id: 1,
    client: "Acme Corp",
    amount: 5000,
    status: "paid",
  },
  { id: 2, client: "Globex Inc", amount: 3000, status: "pending" },
  { id: 3, client: "Soylent Co", amount: 7000, status: "overdue" },
];

// GET all invoices
app.get("/api/invoices", (req, res) => {
  res.status(200).json(invoices);
});

// GET single invoice by ID
app.get("/api/invoices/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);

  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    return res.status(404).json({ message: "Invoice not found" });
  }

  res.status(200).json(invoice);
});

// CREATE a new invoice
app.post("/api/invoices", (req, res) => {
  const { client, amount, status } = req.body;

  if (!client || typeof amount !== "number") {
    return res.status(400).json({ message: "Invalid invoice data" });
  }

  const invoice = {
    id: invoices.length + 1,
    client,
    amount,
    status: status || "pending",
  };

  invoices.push(invoice);
  res.status(201).json(invoice);
});

// UPDATE invoice status
app.put("/api/invoices/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    return res.status(404).json({ message: "Invoice not found" });
  }

  invoice.status = status || invoice.status;
  res.status(200).json(invoice);
});

// DELETE an invoice
app.delete("/api/invoices/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = invoices.findIndex((inv) => inv.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Invoice not found" });
  }

  invoices.splice(index, 1);
  res.status(204).send();
});

// GET invoices by status
app.get("/api/invoices/status/:status", (req, res) => {
  const status = req.params.status;
  const filteredInvoices = invoices.filter((inv) => inv.status === status);

  if (filteredInvoices.length === 0) {
    return res
      .status(404)
      .json({ message: "No invoices found with this status" });
  }

  res.status(200).json(filteredInvoices);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
