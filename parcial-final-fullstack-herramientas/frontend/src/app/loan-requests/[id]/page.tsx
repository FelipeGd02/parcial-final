import Link from "next/link";
import { notFound } from "next/navigation";
import { apiFetch } from "../../../lib/api";

type ReceiptPageProps = { params: Promise<{ id: string }> };

export default async function ReceiptPage({ params }: ReceiptPageProps) {
  const {id} = await params;
  const requestId = Number(id);
  if (!Number.isSafeInteger(requestId) || requestID < 1 || String(requestId) !== id){
    notFound();
  }
  const response = await apiFetch(`/loan-request/${requestId}`);
  if (!response.ok) notFound();
  const request: PrintRequest = await response.json();
  // TODO FRONT-C: leer params y consultar el detalle con apiFetch.
  // TODO FRONT-C: mostrar ID, purpose, days y tool.name de la solicitud recibida.
  void params;

  return (
    <main>
      <h1>Loan receipt</h1>
      <Link href="/loan-requests">Back to requests</Link>
      <section className="panel">
        <p>Complete the request details.</p>
      </section>
    </main>
  );
}

