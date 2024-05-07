

function HeroBento() {
  return (
    <div className="flex h-[80vh] gap-4 max-w-7xl mx-auto px-4 pt-4 overflow:hidden">
      <div className="flex-1">
      <div className="relative h-3/4 bg-blue-200 rounded-xl flex flex-col justify-center items-center min-h-[500px]">
        <h1 className="text-5xl lg:text-6xl font-semibold text-slate-800 px-12">
          Aprendendo a Lidar com Dinheiro
        </h1>

        <p className="text-slate-950 p-12 lg:pr-20 ">
        Olá, professores e professoras! Sejam bem-vindos e bem-vindas ao segundo site da camada digital da coleção <strong>Aprendendo a Lidar com Dinheiro – Educação Financeira</strong>. Neste material, traremos um aprofundamento nas etapas de elaboração do <strong>Planejamento Didático Ativo (PDA)</strong>, conheceremos o <strong>Plano de Ação dos estudantes</strong> e aprenderemos a utilizar o <strong>Padlet</strong> para criar um Diário de Bordo.
        </p>
      </div>
        
        <div className="flex h-1/4 gap-4">
          <div className="w-2/3 bg-green-500 rounded-xl my-4" style={{backgroundImage: 'url(images/dinheirin2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="w-1/3 bg-primary rounded-xl my-4" style={{backgroundImage: 'url(images/trio.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>

      </div>
      <div className="hidden md:block flex-1 relative mb-4 bg-gradient-to-b from-primary-focus to-primary-focus rounded-xl min-h-[550px]">
        
        <div className="absolute inset-0 " style={{backgroundImage: 'url(images/mao9.png)', backgroundSize: 'cover', backgroundPosition: 'top'}}></div>
      </div>
    </div>
  )
}

export default HeroBento