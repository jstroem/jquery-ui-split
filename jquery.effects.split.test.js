$( document ).ready(
		function( ) {
			$( "[data-effect]" ).bind(
					'click',
					function( ) {
						console.log( "ID: " + $( this ).data( 'elementId' ) );
						$( '#' + $( this ).data( 'elementId' ) ).effect(
								$( this ).data( 'effect' ), {}, 1000 //Duration
						);
					} );
		} );