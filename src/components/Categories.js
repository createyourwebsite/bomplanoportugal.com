
import aeg from './img/aeg.png'
import remote from './img/remote.jpg'
import mochilla from './img/mochilarato.jpg'
import maquina from './img/maquina.jpg'
import portatil from './img/portatilhp.jpg'

const cat = ["Todos","Grandes Eletrodomésticos","Pequenos Electrodomésticos","TV, vidéo e som", "Informatica e acessorios"];

const Categories = [
  
    {id: 1,
     category: cat[1],
     title: 'máquina de secar roupa bomba de calor de 8,0 kg',
     image: remote,
     description: 'PRECISA DE ADICIONAR CUPÃO " 10DESCAEG " AO CARRINHO.',
     descriptionProduct1: "Entrega ao domicílio",
     descriptionProduct2: "Instalação",
     descriptionProduct3: "Devolução alargada até 30 dias",
     descriptionProduct4: "Extensão de garantia: 2 anos",
     price: '577.85€',
     priceBefore: "889€",
     website: "aeg.com.pt",
     link: "https://www.aeg.com.pt/laundry/laundry/dryers/heat-pump-dryer/tr818p2ob/"
     
    
    },
    { id: 2,
      category: cat[1],
      title: 'máquina de lavar roupa de livre instalação de 9 kg l8fec942q',
      image: aeg,
      description: 'PRECISA DE ADICIONAR CUPÃO " 10DESCAEG " AO CARRINHO.',
      descriptionProduct1: "Entrega ao domicílio",
      descriptionProduct2: "Instalação",
      descriptionProduct3: "Devolução alargada até 30 dias",
      descriptionProduct4: "Extensão de garantia: 2 anos",
      price: '741.95€',
      priceBefore: "1349€",
      website: "aeg.com.pt",
      link: "https://www.aeg.com.pt/laundry/laundry/washing-machines/front-loader-washing-machine/l8fec942q/"
   
       
       },
       { id: 3,
        category: cat[4],
        title: 'bundle hp mochila pavillion gaming backpack 300 17" + rato óptico pavillion gaming 300',
        image: mochilla,
        descriptionProduct1: "Projetado para quem não abre mão de ter tudo em qualquer hora e lugar",
        descriptionProduct2: "Mochila HP Pavilion Gaming 300 oferece um exterior resistente às intempéries",
        descriptionProduct3: "Rato com sensor óptico até 5000 DPI",
        descriptionProduct4: "...",
        price: '19,90€',
        priceBefore: "74,90€",
        website: "pcdiga.pt",
        link: "https://pcdiga.com/bundle-hp-mochila-pavillion-gaming-backpack-300-17-rato-optico-pavillion-gaming-300-6eu56aa-4ph30aa-88698729571"
     
         
         },
         { id: 4,
          category: cat[1],
          title: 'máquina de lavar roupa hisense wfpv9014em 9kg 1400rpm e branca',
          image: maquina,
          descriptionProduct1: "Eficiência Energética E/A+++",
          descriptionProduct2: "Dimensões: 595 x 595 x 850 mm",
          descriptionProduct3: "Capacidade de lavagem 9kg",
          descriptionProduct4: "RPM: 1400",
          price: '289,90€',
          priceBefore: "429.90€",
          website: "pcdiga.pt",
          link: "https://www.pcdiga.com/maquina-de-lavar-roupa-hisense-wfpv9014em-9kg-1400rpm-e-branca-wfpv9014evm-6901101815118"
       
           
           },
           { id: 5,
            category: cat[4],
            title: 'portátil hp laptop 15s-eq2016np 15.6"',
            image: portatil,
            
            descriptionProduct1: "Processador: AMD Ryzen™ 5 5500U Hexa-Core, 2.10 GHz com Turbo",
            descriptionProduct2: "até 4.00 GHz, 11 MB Cache",
            descriptionProduct3: "Sistema Operativo: sem.",
            descriptionProduct4: "Memória RAM: 8GB (1x8GB) DDR4-3200 MHz",
            price: '349.90€',
            priceBefore: "599.90€",
            website: "pcdiga.pt",
            link: "https://www.pcdiga.com/portatil-hp-laptop-15s-eq2016np-15-6-4s246ea-ab9-196188208311"
         
             
             }
  
]

export default Categories;