import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true, // Standalone activé ici
  imports: [CommonModule], // Assurez-vous que CommonModule est importé ici
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { name: 'Algesic 1000 mg', image: 'assets/algesic.jpg', price: 6 },
    { name: 'Alergica 10 mg', image: 'assets/allergica.jpg', price: 24 },
    { name: 'Cetamol 1000 mg', image: 'assets/cetamol.jpg', price: 15 },
    { name: 'Doliprane 1000 mg', image: 'assets/doliprane.jpg', price: 4.5 },
    { name: 'Ferfex ', image: 'assets/ferfex.jpg', price: 12 },
    { name: 'Gripex ', image: 'assets/gripex.jpg', price: 10 },
    { name: 'Septanest  ', image: 'assets/septanest.jpg', price: 35 },
    { name: 'Physiol ', image: 'assets/physiol.jpg', price: 16 },





    { name: 'Crème Hydradante Avène', image: 'assets/creme hydratante avene.jpg', price: 32 },
    { name: 'Crème Hydradante SVR', image: 'assets/creme hydratante svr.jpg', price: 46 },
    { name: 'Crème Lavante Uriage', image: 'assets/creme lavante uriage.jpg', price: 18 },
    { name: 'Eau Thermal Spray Avène', image: 'assets/eau thermal spray avene.jpg', price: 37 },
    { name: 'Eau Thermal Uriage ', image: 'assets/eau thermal uriage.jpg', price: 27 },

    { name: 'Ecran SVR 50 spf', image: 'assets/ecran svr 2.jpg', price: 65 },
    { name: 'Ecran teinté SVR 50 spf ', image: 'assets/ecran svr.jpg', price: 75 },
    { name: 'Ecran Uriage 30 spf', image: 'assets/ecran uriage.jpg', price: 56 },
    { name: 'Gel Moussant SVR', image: 'assets/gel moussant svr.jpg', price: 35 },
    { name: 'Gel Nettoyant Uriage ', image: 'assets/gel nettoyant uriage.jpg', price: 30},
    { name: 'Gel Nettoyant Avène ', image: 'assets/gel nettoyanty avene.jpg', price: 32},
    { name: 'Gel Phytovera ', image: 'assets/gel phytovera.jpg', price: 15},
    { name: 'Trousse SVR  ', image: 'assets/SVR TROUSSE.jpg', price: 115},

    { name: 'Sérum B3 Avène ', image: 'assets/serum b3 avene.jpg', price: 34},
    { name: 'Sérum Phyteal ', image: 'assets/serum phyteal.jpg', price: 45},

    { name: 'Shampoing Phyteal ', image: 'assets/shampoing phyteal.png', price: 20},

    { name: 'Sucette ', image: 'assets/sucette.jpg', price: 15},
    { name: 'Test de grocesse ', image: 'assets/test de grosesse.jpg', price: 15},
    { name: 'Tétines', image: 'assets/tétines.png', price: 12},
    { name: 'Biberon', image: 'assets/biberon.jpg', price: 14}







  ];

}
