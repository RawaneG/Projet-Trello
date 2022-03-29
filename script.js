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
    const input = document.querySelectorAll('input');
    for (let index = 0; index < bloc.length; index++) 
    {
        bloc[index].setAttribute('id',`bloc${index}`);
        input[index].value = `Colonne ${index + 1}`;
    }
}

function creationColonne()
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
                const task = document.createElement('div');
                task.setAttribute('class','task');
                const supprimer_div = document.createElement('div');
                supprimer_div.setAttribute('class',`supprimer`);
                const supprimer_icone = document.createElement('i');
                supprimer_icone.classList.add('fa','fa-trash');
                supprimer_div.append(supprimer_icone);
            bloc_son.append(task,supprimer_div);
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
            const deleteChoice = document.createElement('div');
            deleteChoice.setAttribute('class','choice');
                const deleteBouton = document.createElement('button');
                deleteBouton.setAttribute('id','delete');
                deleteBouton.innerText = 'Supprimer';
                const annulerBouton = document.createElement('button');
                annulerBouton.setAttribute('id','annuler');
                annulerBouton.innerText = 'Annuler';
            deleteChoice.append(deleteBouton,annulerBouton);
        confirm_delete.append(deleteTitle,deleteChoice);
    delete_popUp.append(confirm_delete);
    body.append(delete_popUp);
}

confirmation_suppression();
const confirmer_suppression = document.querySelector('.delete_pop_up');
const button_delete = document.querySelector('#delete');
const annuler = document.querySelector('#annuler');

createurColonne.addEventListener('click', (e) => 
{
    if(second_container.children.length >= 5)
    {
        e.preventDefault();
    }
    else
    {
        creationColonne();
        blocRebuild();      
        const bloc = document.querySelectorAll('.bloc');
        const inputs = document.querySelectorAll('input');
        const suppression = document.querySelectorAll('.supprimer');
        for (let index = 0; index < suppression.length; index++) 
        {
            suppression[index].addEventListener('click',() => 
            {
                confirmer_suppression.setAttribute('class','delete_pop_up_affiche');
                button_delete.addEventListener('click',() => 
                {
                    bloc[index].remove();
                    confirmer_suppression.setAttribute('class','delete_pop_up');
                    blocRebuild();
                    j = 0;  
                })
            })
        }

        for (let a = 0; a < inputs.length; a++) 
        {
            inputs[a].addEventListener('click',() => 
            {
                
            })
        }
    }
})

                                    //  CREATION DES NOTES

                     //  CREATION D'UNE FONCTION DE CREATION DE NOTE
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
                    begin_time_input_div.classList.add('inputs','start');
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
                    end_time_input_div.classList.add('inputs','end');
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

                            // Evenement au moment ou l'on clique sur la colonne 'Note'
const pop_up = document.querySelectorAll('.pop_up_affiche');
createurNote.addEventListener('click', (e) => 
{
    if(second_container.children.length == 0)
    {
        e.preventDefault();
    }
    else
    {
        popUp();
        const pop_up = document.querySelectorAll('.pop_up_affiche');
        const ajout = pop_up[0].querySelector('.ajout');
    
                                // Evenement au moment ou l'on clique sur le bouton ajouter
    
        ajout.addEventListener('click',(e) => 
        {
                            //  Récupération des différentes valeurs du formulaire 
    
                for (let x = 0; x < pop_up.length; x++) 
                {
                                //  Récupération de la valeur du textarea
    
                    const parent = document.querySelectorAll('.bloc_son');
                    const son = parent[0].querySelector('.task');
                    const textarea = document.querySelectorAll('textarea');
                    let textarea_value = '';
                    for(let i = 0; i < textarea.length; i++)
                    {
                        textarea_value = 'Tâche : ' + textarea[i].value;
                    }
    
                                //  Récupération de la valeur de la date
    
                    const date = document.querySelectorAll('input[type=date]');
                    let date_value = '';
                    for(let i = 0; i < date.length; i++)
                    {
                        date_value = 'Date : ' + date[i].value;
                    }
    
                                //  Récupération de la valeur de l'heure de début
    
                    const heure_debut = document.querySelectorAll('.start');
                    let begin_value = '';
                    for(let i = 0; i < heure_debut.length; i++)
                    {
                    let begin_time = heure_debut[i].querySelectorAll('input[type=time]');
                        for(let j = 0; j < begin_time.length; j++)
                        {
                            begin_value = 'Commence à : ' + begin_time[j].value;
                        }
                    }
                                //  Récupération de la valeur de l'heure de fin
    
                    const heure_fin = document.querySelectorAll('.end');
                    let end_value = '';
                    for(let i = 0; i < heure_fin.length; i++)
                    {
                        let end_time = heure_fin[i].querySelectorAll('input[type=time]');
                        for(let j = 0; j < end_time.length; j++)
                        {
                            end_value = 'Termine à : ' + end_time[j].value;
                        }
                    }   
                                //  Affectation des différentes valeurs dans la div 'myTask'
    
                    son.prepend(myTask(textarea_value,date_value,begin_value,end_value))
    
                                            //  Fermeture automatique du Pop Up

                    pop_up[x].setAttribute('class','pop_up');
                    
                        //  Evenement de fermeture du Pop Up manuellement après ajout de tâches
    
                    const fermer = document.querySelectorAll('.fa-close');
                    for (let y = 0; y < fermer.length; y++) 
                    {
                        fermer[y].addEventListener('click',() => 
                        {
                            pop_up[x].setAttribute('class','pop_up');
                        }) 
                    }
    
    
                }
        });
    }

                    //  Evenement de fermeture du Pop Up manuellement sans ajout de tâches

    for (let x = 0; x < pop_up.length; x++) 
    {
        const fermer = document.querySelectorAll('.fa-close');
        for (let y = 0; y < fermer.length; y++) 
        {
            fermer[y].addEventListener('click',() => 
            {
                pop_up[x].setAttribute('class','pop_up');
            }) 
        }
    }
})

let k = 0;

function myTask(tachePara,datePara,heure_debutPara,heure_finPara)
{
    const myTask = document.createElement('div');
    myTask.setAttribute('class','myTask');
    myTask.setAttribute('id',`myTask_${k}`);

        const gauche = document.createElement('div');
        gauche.setAttribute('class','gauche');
            const gauche_icone = document.createElement('i');
            gauche_icone.classList.add('fa','fa-angle-double-left');
            gauche_icone.style.visibility = 'hidden';
            gauche_icone.setAttribute('onclick',`move(${k},'left')`);
        gauche.append(gauche_icone);
        const text_div = document.createElement('div');
        text_div.setAttribute('class','text');
            const tache = document.createElement('h4');
            tache.innerText= tachePara;
            const date = document.createElement('h4');
            date.innerText = datePara;
            const heure_debut = document.createElement('h4');
            heure_debut.innerText = heure_debutPara;
            const heure_fin = document.createElement('h4');
            heure_fin.innerText = heure_finPara;
        text_div.append(tache,date,heure_debut,heure_fin);
        const droite = document.createElement('div');
        droite.setAttribute('class','droite');
            const droite_icone = document.createElement('i');
            droite_icone.classList.add('fa','fa-angle-double-right');
            droite_icone.setAttribute('onclick', `move(${k},'right')`);
        droite.append(droite_icone);
    myTask.append(gauche,text_div,droite);
    k++;
    return myTask
}

function move(id,side)
{
    if(side == 'left')
    {
        let left = document.getElementById('myTask_' + id)
        let thePrevious = left.parentElement.parentElement.parentElement.previousSibling.querySelector('.task');
        thePrevious.append(left);
    }
    else
    {
        let right = document.getElementById('myTask_' + id)
        let theNext = right.parentElement.parentElement.parentElement.nextSibling.querySelector('.task');
        theNext.append(right);
    }
}
const trash_menu = document.querySelector('.trash_menu');
const trash = document.querySelector('.trash');
const trash_icone = trash.querySelector('i');
trash_icone.addEventListener('click',() => 
{
    trash_menu.classList.toggle('trash_menu');
    trash_menu.classList.toggle('trash_menu_open');
    trash.classList.toggle('trash_return');
    trash.classList.toggle('trash')
})