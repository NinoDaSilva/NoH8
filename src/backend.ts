// Import Pocketbase
import PocketBase from 'pocketbase';
// PocketBase vps connection
var pocketbase_ip=''
if(import.meta.env.MODE === 'production')
  pocketbase_ip='https://nohate.nino-da-silva.fr'
else
  pocketbase_ip='http://127.0.0.1:8090'

export const pb = new PocketBase(pocketbase_ip);
//

// Retourne tous les contacts
export async function allContact() {
    const records = await pb.collection('contact').getFullList();
    return records;
}

// Retourne toutes les questions (faq)
export async function allFaq() {
  const records = await pb.collection('faq').getFullList();
  return records;
}

// Retourne les questions de la catégorie "top"
export async function TopFaq() {
  const records = await pb.collection('faq').getFullList({
    filter: "category='top'"
  });
  return records;
}

// Retourne touts les témoignages du plus récent au plus ancien
export async function allEvidence() {
  const records = await pb.collection('evidence').getFullList({
    sort: '-created'
  });
  return records;
}

// Retourne les témoignages de la catégorie "victime"
export async function victimEvidence() {
  const records = await pb.collection('evidence').getFullList({
    filter: "category='victime'"
  });
  return records;
}

// Retourne les témoignages de la catégorie "temoin"
export async function temoinEvidence() {
  const records = await pb.collection('evidence').getFullList({
    filter: "category='temoin'"
  });
  return records;
}