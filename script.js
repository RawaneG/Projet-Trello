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
let j = 0;

function blocRebuild() 
{
    const bloc = document.querySelectorAll('.bloc');
    for (let index = 0; index < bloc.length; index++) 
    {
        bloc[index].setAttribute('id',`bloc${index}`);
    }
}

function creationColonne()
{ 
        const bloc = document.createElement('div');
        bloc.setAttribute('class','bloc');
        bloc.setAttribute('id',`bloc${i}`);
            const input = document.createElement('input');
            input.setAttribute('type','text');
            input.value = `Colonne`;
            input.setAttribute('disabled','disabled');
            const bloc_son = document.createElement('div');
            bloc_son.setAttribute('class','bloc_son');
                const supprimer_div = document.createElement('div');
                supprimer_div.setAttribute('class',`supprimer`);
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
        bloc.style.backgroundImage = 'url("mylogo.png") ,' + colors[j];
        bloc.append(input,bloc_son);   
        second_container.append(bloc);    
        body.append(second_container);
        i++;
        j++;
}

function confirmation_suppression()
{
    const delete_popUp = document.createElement('div');
    delete_popUp.setAttribute('class','delete_pop_up');
        const confirm_delete = document.createElement('div');
        confirm_delete.setAttribute('class','confirm_delete');
            const deleteTitle = document.createElement('h3');
            deleteTitle.innerHTML = 'Voulez-vous supprimer cette colonne ?';
            const deleteBouton = document.createElement('button');
            deleteBouton.innerHTML = 'Supprimer';
        confirm_delete.append(deleteTitle,deleteBouton);
    delete_popUp.append(confirm_delete);
    body.append(delete_popUp);
}

confirmation_suppression();
const confirmer_suppression = document.querySelector('.delete_pop_up');

createurColonne.addEventListener('click', (e) => 
{
    if(second_container.children.length >= 5)
    {
        e.preventDefault();
    }
    else
    {
        creationColonne();
        const bloc = document.querySelectorAll('.bloc');
        const inputs = document.querySelectorAll('input');
        const suppression = document.querySelectorAll('.supprimer');
        for (let index = 0; index < suppression.length; index++) 
        {
            suppression[index].addEventListener('click',() => 
            {
                confirmer_suppression.setAttribute('class','delete_pop_up_affiche');
                confirmer_suppression.addEventListener('click',() => 
                {
                    bloc[index].remove();
                    confirmer_suppression.setAttribute('class','delete_pop_up');
                    blocRebuild();
                    j = 0;  
                })
            })
        }
        for (let index = 0; index < inputs.length; index++) 
        {
            inputs[index].addEventListener('click',() => 
            {
                
            })
        }
    }
})

                                    //  CREATION DES NOTES

                     //  ETAPE 1 : CREATION D'UNE FONCTION DE CREATION DE NOTE
function popUp()
{
    const pop_up = document.createElement('div');
    pop_up.classList.add('pop_up_affiche','pop_up');
        const container = document.createElement('div');
        container.setAttribute('class','container');
            const entete = document.createElement('div');
            entete.setAttribute('class','entete');
                const close = document.createElement('div');
                close.setAttribute('class','close');
                    const close_icone = document.createElement('i');
                    close_icone.classList.add('fa','fa-close');
                close.append(close_icone);
                const titre = document.createElement('div');
                titre.setAttribute('class','titre');
                    const titre_child = document.createElement('h3');
                    titre_child.innerText = 'NOUVELLE TACHE';
                titre.append(titre_child);
            entete.append(close,titre);
            const corps = document.createElement('div');
            corps.setAttribute('class','corps');
                const presentation = document.createElement('div');
                presentation.setAttribute('class','presentation');
                    const presentation_para = document.createElement('p');
                    presentation_para.innerText = 'Remplir les informations de la nouvelle tâche';
                presentation.append(presentation_para);
                const textarea_div = document.createElement('div');
                textarea_div.setAttribute('class','textarea');
                    const label_div = document.createElement('div');
                    label_div.setAttribute('class','label');
                        const label_text = document.createElement('label');
                        label_text.innerText = 'Tache';
                    label_div.append(label_text);
                    const textarea_text = document.createElement('textarea');
                textarea_div.append(label_div,textarea_text);
                const date_input = document.createElement('div');
                date_input.setAttribute('class','input');
                    const date_input_label_div = document.createElement('div');
                    date_input_label_div.setAttribute('class','label');
                        const date_input_label_text = document.createElement('label');
                        date_input_label_text.innerText = 'Date';
                    date_input_label_div.append(date_input_label_text);
                    const date_input_input_div = document.createElement('div');
                    date_input_input_div.setAttribute('class','inputs');
                        const date_input_input_text = document.createElement('input');
                        date_input_input_text.setAttribute('type','date');
                    date_input_input_div.append(date_input_input_text);
                date_input.append(date_input_label_div,date_input_input_div);
                const begin_time = document.createElement('div');
                begin_time.setAttribute('class','input');
                    const begin_time_label_div = document.createElement('div');
                    begin_time_label_div.setAttribute('class','label');
                        const begin_time_label_text = document.createElement('label');
                        begin_time_label_text.innerText = 'Heure de début';
                    begin_time_label_div.append(begin_time_label_text);
                    const begin_time_input_div = document.createElement('div');
                    begin_time_input_div.setAttribute('class','inputs');
                        const begin_time_input_text = document.createElement('input');
                        begin_time_input_text.setAttribute('type','time');
                    begin_time_input_div.append(begin_time_input_text);
                begin_time.append(begin_time_label_div,begin_time_input_div);
                const end_time = document.createElement('div');
                end_time.setAttribute('class','input');
                    const end_time_label_div = document.createElement('div');
                    end_time_label_div.setAttribute('class','label');
                        const end_time_label_text = document.createElement('label');
                        end_time_label_text.innerText = 'Heure de fin';
                    end_time_label_div.append(end_time_label_text);
                    const end_time_input_div = document.createElement('div');
                    end_time_input_div.setAttribute('class','inputs');
                        const end_time_input_text = document.createElement('input');
                        end_time_input_text.setAttribute('type','time');
                    end_time_input_div.append(end_time_input_text);
                end_time.append(end_time_label_div,end_time_input_div);
                const ajout = document.createElement('div');
                ajout.setAttribute('class','ajout');
                    const ajout_button = document.createElement('button');
                    ajout_button.setAttribute('type','button');
                    ajout_button.innerText = 'Ajouter';
                ajout.append(ajout_button);
            corps.append(presentation,textarea_div,date_input,begin_time,end_time,ajout);
        container.append(entete,corps);
    pop_up.append(container);
body.append(pop_up);
}

const createurNote = document.querySelector('.note');

createurNote.addEventListener('click', () => 
{
    popUp();
    const pop_up = document.querySelector('.pop_up_affiche');
    const ajout = document.querySelector('.ajout')
    const ajout_button = ajout.querySelector('button');
    ajout_button.addEventListener('click',(e) => 
    {
        if(second_container.children.length == 0)
        {
            e.preventDefault();
        }
        else
        {
            const parent = document.querySelectorAll('.bloc_son');
            parent[0].prepend(myTask())
        }
    });
                     //  ETAPE 2 : CREATION DU BOUTON DE SUPPRESSION DU FORMULAIRE

    const fermer = document.querySelectorAll('.fa-close');
    for (let index = 0; index < fermer.length; index++) 
    {
        fermer[index].addEventListener('click',() => 
        {
            pop_up.setAttribute('class','pop_up');
        }) 
    }
})
                     //  ETAPE 3 : CREATION D'UNE FONCTION DE CREATION DES TACHES
function myTask()
{
    const myTask = document.createElement('div');
    myTask.setAttribute('class','myTask');
        const gauche = document.createElement('div');
        gauche.setAttribute('class','gauche');
            const gauche_icone = document.createElement('i');
            gauche_icone.classList.add('fa','fa-angle-double-left');
        gauche.append(gauche_icone);
        const text_div = document.createElement('div');
        text_div.setAttribute('class','text');
            const text = document.createElement('span');
            text.innerText = 'this is an example of task';
        text_div.append(text);
        const droite = document.createElement('div');
        droite.setAttribute('class','droite');
            const droite_icone = document.createElement('i');
            droite_icone.classList.add('fa','fa-angle-double-right');
        droite.append(droite_icone);
    myTask.append(gauche,text,droite);
    return myTask
}
