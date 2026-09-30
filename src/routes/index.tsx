import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VittaLivs — Tabela Nutricional das Marmitas" },
      {
        name: "description",
        content:
          "Selecione o sabor da sua marmita VittaLivs e veja a tabela nutricional completa. Saúde que cabe na sua rotina.",
      },
      { property: "og:title", content: "VittaLivs — Tabela Nutricional das Marmitas" },
      {
        property: "og:description",
        content:
          "Escaneou o QR Code? Escolha o sabor da sua marmita e confira todas as informações nutricionais.",
      },
    ],
  }),
  component: Index,
});

type Prato = {
  nome: string;
  porcao: string;
  kcal: number;
  carboidratos: number;
  acucaresTotais: number;
  acucaresAdicionados: number;
  proteinas: number;
  gordurasTotais: number;
  gordurasSaturadas: number;
  gordurasTrans: number;
  fibras: number;
  sodio: number;
};

const PRATOS: Prato[] = [
  {
    nome: "Escondidinho de Carne Moída",
    porcao: "1 marmita (400 g)",
    kcal: 476,
    carboidratos: 30.2,
    acucaresTotais: 2.1,
    acucaresAdicionados: 0,
    proteinas: 46.1,
    gordurasTotais: 17.5,
    gordurasSaturadas: 6.4,
    gordurasTrans: 0,
    fibras: 4.2,
    sodio: 394.1,
  },
  {
    nome: "Macarrão à Bolonhesa",
    porcao: "1 marmita (400 g)",
    kcal: 487,
    carboidratos: 52.5,
    acucaresTotais: 4.3,
    acucaresAdicionados: 0,
    proteinas: 31.7,
    gordurasTotais: 16.4,
    gordurasSaturadas: 5.8,
    gordurasTrans: 0,
    fibras: 3.8,
    sodio: 261.5,
  },
  {
    nome: "Escondidinho de Frango",
    porcao: "1 marmita (400 g)",
    kcal: 435,
    carboidratos: 30.2,
    acucaresTotais: 2.0,
    acucaresAdicionados: 0,
    proteinas: 36.5,
    gordurasTotais: 17.5,
    gordurasSaturadas: 5.1,
    gordurasTrans: 0,
    fibras: 4.0,
    sodio: 341.1,
  },
  {
    nome: "Carne de Panela com Legumes",
    porcao: "1 marmita (400 g)",
    kcal: 518,
    carboidratos: 64.7,
    acucaresTotais: 5.2,
    acucaresAdicionados: 0,
    proteinas: 42.9,
    gordurasTotais: 19.9,
    gordurasSaturadas: 7.2,
    gordurasTrans: 0,
    fibras: 6.1,
    sodio: 241.2,
  },
  {
    nome: "Strogonoff de Frango",
    porcao: "1 marmita (400 g)",
    kcal: 418,
    carboidratos: 43,
    acucaresTotais: 3.4,
    acucaresAdicionados: 0,
    proteinas: 19.1,
    gordurasTotais: 13.6,
    gordurasSaturadas: 5.9,
    gordurasTrans: 0,
    fibras: 2.9,
    sodio: 504,
  },
  {
    nome: "Panqueca à Bolonhesa",
    porcao: "1 marmita (400 g)",
    kcal: 378,
    carboidratos: 28.5,
    acucaresTotais: 3.1,
    acucaresAdicionados: 0,
    proteinas: 43.6,
    gordurasTotais: 9.1,
    gordurasSaturadas: 3.4,
    gordurasTrans: 0,
    fibras: 3.2,
    sodio: 586,
  },
  {
    nome: "Panqueca de Frango",
    porcao: "1 marmita (400 g)",
    kcal: 380,
    carboidratos: 38.8,
    acucaresTotais: 3.0,
    acucaresAdicionados: 0,
    proteinas: 35.6,
    gordurasTotais: 8.8,
    gordurasSaturadas: 3.1,
    gordurasTrans: 0,
    fibras: 3.0,
    sodio: 642,
  },
  {
    nome: "Frango com Quiabo",
    porcao: "1 marmita (400 g)",
    kcal: 355,
    carboidratos: 51.1,
    acucaresTotais: 2.8,
    acucaresAdicionados: 0,
    proteinas: 36.4,
    gordurasTotais: 3.9,
    gordurasSaturadas: 1.2,
    gordurasTrans: 0,
    fibras: 5.4,
    sodio: 491.2,
  },
];

// Valores diários de referência (ANVISA, dieta de 2.000 kcal)
const VD = {
  kcal: 2000,
  carboidratos: 300,
  acucaresAdicionados: 50,
  proteinas: 75,
  gordurasTotais: 55,
  gordurasSaturadas: 22,
  fibras: 25,
  sodio: 2000,
};

const n = (v: number, casas = 1) =>
  v.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas });

const vd = (valor: number, ref: number) => `${Math.round((valor / ref) * 100)}%`;

function Linha({
  rotulo,
  valor,
  percentual,
  destaque = false,
  recuo = false,
}: {
  rotulo: string;
  valor: string;
  percentual: string;
  destaque?: boolean;
  recuo?: boolean;
}) {
  return (
    <tr className="border-b border-border last:border-b-0">
      <th
        scope="row"
        className={`py-2.5 pr-2 text-left align-top text-sm font-normal text-foreground ${
          destaque ? "font-bold" : ""
        } ${recuo ? "pl-4" : ""}`}
      >
        {rotulo}
      </th>
      <td className="py-2.5 px-2 text-right align-top text-sm tabular-nums text-foreground">
        {valor}
      </td>
      <td className="py-2.5 pl-2 text-right align-top text-sm tabular-nums text-foreground">
        {percentual}
      </td>
    </tr>
  );
}

function Index() {
  const [selecionado, setSelecionado] = useState("");
  const prato = PRATOS.find((p) => p.nome === selecionado);

  return (
    <div className="min-h-screen bg-background pb-10">
      <header className="bg-primary px-5 pb-8 pt-10 text-center text-primary-foreground rounded-b-[2rem] shadow-brand">
        <h1 className="font-display text-4xl font-extrabold tracking-tight">VittaLivs</h1>
        <p className="mt-1 text-base font-medium opacity-95">Saúde que cabe na sua rotina</p>
      </header>

      <main className="mx-auto w-full max-w-md px-5">
        <section className="-mt-5 rounded-2xl bg-card p-5 shadow-card">
          <label
            htmlFor="prato"
            className="block text-center font-display text-xl font-bold text-foreground"
          >
            Qual marmita você vai saborear hoje?
          </label>
          <select
            id="prato"
            value={selecionado}
            onChange={(e) => setSelecionado(e.target.value)}
            className="mt-4 w-full appearance-none rounded-xl border-2 border-primary bg-card px-4 py-4 text-center text-base font-semibold text-foreground outline-none focus:ring-4 focus:ring-ring/30"
          >
            <option value="">Selecione o sabor</option>
            {PRATOS.map((p) => (
              <option key={p.nome} value={p.nome}>
                {p.nome}
              </option>
            ))}
          </select>
        </section>

        {prato && (
          <section className="mt-6 overflow-hidden rounded-2xl bg-card shadow-card">
            <div className="bg-primary px-4 py-3 text-primary-foreground">
              <h2 className="font-display text-lg font-bold leading-tight">{prato.nome}</h2>
              <p className="text-sm opacity-95">Porção: {prato.porcao}</p>
            </div>

            <div className="px-4 py-3">
              <h3 className="border-b-4 border-foreground pb-2 text-center font-display text-lg font-extrabold uppercase text-foreground">
                Informação Nutricional
              </h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th className="py-2 text-left text-xs font-bold uppercase text-muted-foreground">
                      Item
                    </th>
                    <th className="py-2 px-2 text-right text-xs font-bold uppercase text-muted-foreground">
                      Porção
                    </th>
                    <th className="py-2 text-right text-xs font-bold uppercase text-muted-foreground">
                      %VD*
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <Linha
                    rotulo="Valor energético"
                    valor={`${prato.kcal} kcal`}
                    percentual={vd(prato.kcal, VD.kcal)}
                    destaque
                  />
                  <Linha
                    rotulo="Carboidratos totais"
                    valor={`${n(prato.carboidratos)} g`}
                    percentual={vd(prato.carboidratos, VD.carboidratos)}
                  />
                  <Linha
                    rotulo="Açúcares totais"
                    valor={`${n(prato.acucaresTotais)} g`}
                    percentual="**"
                    recuo
                  />
                  <Linha
                    rotulo="Açúcares adicionados"
                    valor={`${n(prato.acucaresAdicionados)} g`}
                    percentual={vd(prato.acucaresAdicionados, VD.acucaresAdicionados)}
                    recuo
                  />
                  <Linha
                    rotulo="Proteínas"
                    valor={`${n(prato.proteinas)} g`}
                    percentual={vd(prato.proteinas, VD.proteinas)}
                  />
                  <Linha
                    rotulo="Gorduras totais"
                    valor={`${n(prato.gordurasTotais)} g`}
                    percentual={vd(prato.gordurasTotais, VD.gordurasTotais)}
                  />
                  <Linha
                    rotulo="Gorduras saturadas"
                    valor={`${n(prato.gordurasSaturadas)} g`}
                    percentual={vd(prato.gordurasSaturadas, VD.gordurasSaturadas)}
                    recuo
                  />
                  <Linha
                    rotulo="Gorduras trans"
                    valor={`${n(prato.gordurasTrans)} g`}
                    percentual="**"
                    recuo
                  />
                  <Linha
                    rotulo="Fibras alimentares"
                    valor={`${n(prato.fibras)} g`}
                    percentual={vd(prato.fibras, VD.fibras)}
                  />
                  <Linha
                    rotulo="Sódio"
                    valor={`${n(prato.sodio)} mg`}
                    percentual={vd(prato.sodio, VD.sodio)}
                  />
                </tbody>
              </table>
              <p className="mt-3 border-t-2 border-foreground pt-2 text-xs leading-relaxed text-muted-foreground">
                * Percentual de valores diários fornecidos pela porção, com base em uma dieta de
                2.000 kcal ou 8.400 kJ. Seus valores diários podem ser maiores ou menores
                dependendo de suas necessidades energéticas. ** VD não estabelecido.
              </p>
            </div>
          </section>
        )}

        {!prato && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Escolha um sabor acima para ver a tabela nutricional completa.
          </p>
        )}

        <footer className="mt-10 text-center">
          <p className="font-display text-lg font-extrabold uppercase text-primary">
            Sua marmita chegou!
          </p>
          <p className="font-display text-base font-semibold text-foreground">bom apetite!</p>
        </footer>
      </main>
    </div>
  );
}
