                                // CREATION DU BOUTON DEMARREUR
const body = document.querySelector('body');
    const demarrage = document.createElement('div');
    demarrage.setAttribute('class','demarrage_bouton')
        const logo_demarrage = document.createElement('img');
        logo_demarrage.setAttribute('src','mylogo.png');
    demarrage.appendChild(logo_demarrage);
body.appendChild(demarrage);
                                    // CREATION DU GENERATEUR
const first_container = document.createElement('div');
first_container.setAttribute('class','first_container');
                            // CREATION DE LA PARTIE COLONNE DU GENERATEUR
    const colonne = document.createElement('div');
    colonne.setAttribute('class','colonne');
        const colonne_icone = document.createElement('i');
        colonne_icone.classList.add('fa','fa-plus');
        const colonne_para = document.createElement('p');
        colonne_para.innerHTML = 'Colonne';
    colonne.append(colonne_icone,colonne_para);

                            //  CREATION DE LA PARTIE NOTE DU GENERATEUR
    const note = document.createElement('div');
    note.setAttribute('class','note');
        const note_icone = document.createElement('i');
        note_icone.classList.add('fa','fa-plus');
        const note_para = document.createElement('p');
        note_para.innerHTML = 'Note';
    note.append(note_icone,note_para);

                        //  ATTRIBUTION DE LA COLONNE ET DE LA NOTE AU GENERATEUR
first_container.append(colonne,note);
body.append(first_container);

                                //  BOUTON DE CREATION DU GENERATEUR
const derouler = document.querySelector('.first_container');  
const demarre = document.querySelector('.demarrage_bouton');                      
demarrage.addEventListener('click',() => 
{
    first_container.setAttribute('class','first_container_deroule');
    demarre.setAttribute('class','demarrage_bouton_close');
})
                                    //  CREATION DES COLONNES
const createurColonne = document.querySelector('.colonne');
                            //  ETAPE 1 : CREATION DU CONTENEUR DES COLONNES
const second_container = document.createElement('div');
second_container.setAttribute('class','second_container');
                     //  ETAPE 2 : CREATION D'UNE FONCTION DE CREATION DE COLONNE
let i = 0;
function creationColonne()
{
    if(i >= 5)
    {
        return
    }
    else
    {
        const bloc = document.createElement('div');
        bloc.setAttribute('class','bloc');
        bloc.setAttribute('id',`bloc${i}`);
            const input = document.createElement('input');
            input.setAttribute('type','text');
            input.value = `Colonne ${i + 1}`;
            input.setAttribute('disabled','disabled');
            const bloc_son = document.createElement('div');
            bloc_son.setAttribute('class','bloc_son');
                const supprimer_div = document.createElement('div');
                supprimer_div.setAttribute('class',`supprimer`);
                supprimer_div.setAttribute('id',`supprimer${i}`);
                const supprimer_icone = document.createElement('i');
                supprimer_icone.classList.add('fa','fa-trash');
                supprimer_div.append(supprimer_icone);
            bloc_son.append(supprimer_div);
        const colors = 
        [
            'linear-gradient(#DAE2F8,#D6A4A4)',
            'linear-gradient(#F7F8F8,#ACBB78)',
            'linear-gradient(#2980B9,#6DD5FA,#FFFFFF)',
            'linear-gradient(#7F7FD5,#86A8E7,#91EAE4)',
            'linear-gradient(#a8c0ff,#3f2b96)'
        ];
        bloc.style.backgroundImage = 'url("mylogo.png") ,' + colors[i];
        bloc.append(input,bloc_son);   
        second_container.append(bloc);    
        body.append(second_container);
        i++;
    }
}

createurColonne.addEventListener('click', () => 
{
    creationColonne()
    const bloc = document.querySelectorAll('.bloc');
    const suppression = document.querySelectorAll('.supprimer');
    for (let index = 0; index < suppression.length; index++) 
    {
        suppression[index].addEventListener('click',() => 
        {
            bloc[index].remove();
        })
    }
})

                                    //  CREATION DES NOTES
const createurNote = document.querySelector('.note');
// createurNote.addEventListener('click', () => 
// {

// })
