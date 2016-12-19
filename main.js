const $path = $('#path')
const $input = $('#input')
const $output = $('#output')

if (location.hash.length > 1) {
  $path.val(location.hash.substr(1)).prop('disabled', true)
}

$input.on('input', getResult)
$path.on('input', getResult)
$output.on('click', function(){ this.select() })

function getResult () {
  try {
    const json = JSON.parse($input.val())
    $output.val(JSON.stringify(_.get(json, $path.val())))
  } catch (e) {
    $output.val('')
  }
}
