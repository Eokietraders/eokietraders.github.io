const params = new URLSearchParams(location.search);
const product = params.get('product');
if (product) document.getElementById('product').value = product;

document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  const get = id => document.getElementById(id).value.trim();
  const subject = encodeURIComponent('EOKIE RFQ - ' + get('product'));
  const body = encodeURIComponent(
`Hello EOKIE,

I would like to enquire about the following spare part:

Product / equipment: ${get('product')}
Part number: ${get('partno')}
Manufacturer / OEM: ${get('maker')}
Quantity: ${get('qty')}

Name / Company: ${get('name')}
Phone / WhatsApp: ${get('phone')}

Requirement / details:
${get('details')}

Regards,
${get('name')}`
  );
  window.location.href = `mailto:Sales@eokie.com?subject=${subject}&body=${body}`;
});
